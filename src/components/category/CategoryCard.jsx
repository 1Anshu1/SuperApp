import './style.css'

import React, { useState } from 'react'

const CategoryCard = ({ item, setGenre, genre }) => {

    const [highlight, setHighlight] = useState(false)

    const handleClick = (e) => {
        if (genre.includes(e.target.innerText)) {
            const temp = genre.filter((item) => item !== e.target.innerText)
            setGenre(temp)
            setHighlight(false)
        } else {
            setGenre((prev) => [...prev, e.target.innerText])
            setHighlight(true)
        }

    }



    return (
        <div className='category-card' onClick={handleClick} style={{ backgroundColor: item.bgColor, border: `${highlight ? '4px solid yellow' : '4px solid black'}` }} >
            <div className="category-name" >{item.title}</div>
            <div className="category-img">
                <img src={item.img} alt="" />
            </div>
        </div>
    )
}

export default CategoryCard
