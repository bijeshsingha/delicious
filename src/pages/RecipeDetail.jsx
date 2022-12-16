import React, { useEffect, useState } from 'react'
import { useLocation, useHistory, useParams } from 'react-router-dom'

const RecipeDetail = (props) => {

    const params = useParams()
    const check = localStorage.getItem(params.title);
    const [response, setResponse] = useState(check ? JSON.parse(check) : []);
    const [loading, setLoading] = useState(false);


    const getRecipe = (name) => {
        const apiKey = "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";
        if (check) {
            setResponse(JSON.parse(check));
            console.log("check is not empty")
        }
        else {
            console.log("check is empty")
            setLoading(true)
            fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    "model": "text-davinci-003",
                    "prompt": `${name} recipe`,
                    "max_tokens": 500
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    setResponse(res)
                    setLoading(false)
                    localStorage.setItem(params.title, JSON.stringify(res))
                })
                .catch((err) => console.error(err));
        }
    }
    useEffect(() => {
        getRecipe(params.title)
    }, []);

    const loadingAni = (<div className="loader-container w-full h-[50vh]">
        <div className="spinner"></div>
    </div>)

    let text = ""
    try {
        text = response.choices[0].text

    } catch (error) {
        console.log(error)
    }


    return (
        <div className="w-full h-full relative">
            <div
                className="absolute w-full h-full -z-10"
                style={{
                    background: 'url("") center no-repeat'
                }}>
            </div>
            {loading ? loadingAni :
                (<div className="px-10 py-20">
                    <p className="text-xl font-semibold">Recipe for {params.title}</p>
                    <p className="text-lg ">{text.split('\n').map((item, key) => {
                        return <React.Fragment key={key}>{item}<br /></React.Fragment>
                    })}</p>
                </div>)}
        </div>
    )
}


export default RecipeDetail