import './style.css'

import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import action from '../../assets/categoryImage/action.png'
import drama from '../../assets/categoryImage/drama.png'
import romance from '../../assets/categoryImage/romance.png'
import thriller from '../../assets/categoryImage/thriller.png'
import western from '../../assets/categoryImage/western.png'
import horror from '../../assets/categoryImage/horror.png'
import fantasy from '../../assets/categoryImage/fantasy.png'
import music from '../../assets/categoryImage/music.png'
import fiction from '../../assets/categoryImage/fiction.png'
import CategoryCard from '../../components/category/CategoryCard'

const categoryList = [
    { title: 'Action', img: action, bgColor: '#FF5209' },
    { title: 'Drama', img: drama, bgColor: '#D7A4FF' },
    { title: 'Romance', img: romance, bgColor: '#148A08' },
    { title: 'Thriller', img: thriller, bgColor: '#84C2FF' },
    { title: 'Western', img: western, bgColor: '#902500' },
    { title: 'Horror', img: horror, bgColor: '#7358FF' },
    { title: 'Fantasy', img: fantasy, bgColor: '#FF4ADE' },
    { title: 'Music', img: music, bgColor: '#E61E32' },
    { title: 'Fiction', img: fiction, bgColor: '#6CD061' },
]

const Category = () => {

    const [genre, setGenre] = useState([])

    const [warning, setWarning] = useState('Minimum 3 category required')
    const navigate = useNavigate()

    const handleNext = () => {
        if (genre.length > 2) {
            window.localStorage.setItem('myGenre', JSON.stringify(genre))
            navigate('/showcase')
        }
    }
    const handleSelect = (e) => {
        const temp = genre.filter((item) => item !== e.target.id)
        setGenre(temp)

    }


    return (
        <div className='category'>
            <div className="category-left">
                <div className="title">Super App</div>
                <div className="subtitle">Choose your entertainment category</div>
                <div className='genre'>
                    {genre.map((item) => (
                        <span key={item} className="selected-category">{item} <span id={item} className='deselect' onClick={handleSelect}> X </span></span>))}


                </div>


                {genre.length < 4 && <div className="warning">Minimum 3 category required</div>}
            </div>
            <div className="category-right">
                {
                    categoryList.map((item, idx) => {
                        return (
                            <CategoryCard key={idx} item={item} className='card' setGenre={setGenre} genre={genre} />
                        )
                    })
                }
                <button className='btn' onClick={handleNext}>Next Page</button>
            </div>
        </div>

    )
}

export default Category
