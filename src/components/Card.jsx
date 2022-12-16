import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (recipe) => {
    const navigate = useNavigate()

    const home = 'min-h-[25rem] relative cursor-pointer'
    const others = 'min-h-[18rem] relative cursor-pointer'

    function handleClick(payload) {
        navigate(`/recipe-detail/${recipe.title}`, { state: { id: 1 } })
    }

    return (
        <div className={recipe.height === 18 ? others : home} key={recipe.id} onClick={() => handleClick({ foo: 'bar' })}>
            <p className="pb-16 px-1 flex items-end h-full font-semibold text-center text-base w-full absolute z-10 text-white translate-y-0 bottom-0 justify-center transition duration-300 ease-in-out transform hover:translate-y-[-5px]">
                {recipe.title}
            </p>
            <img
                className="rounded-3xl absolute w-full h-full object-cover"
                src={recipe.image}
                alt={recipe.title}
            />
            <div
                className="rounded-3xl absolute w-full h-full"
                style={{
                    background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7))",
                }}
            ></div>
        </div>
    )
}

Card.defaultProps = {
    height: 25,
};

export default Card