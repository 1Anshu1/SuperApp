import './style.css'

import React from 'react'

import Carausal from '../../components/movie/Carausal'

const Movies = () => {
    return (
        <>
            <div>
                <h1 className=''>Super App</h1>
                <img src="" alt="" />
            </div>
            <div>
                <div>
                    Entertainment according to your choice
                    <Carausal />
                </div>
            </div>
        </>
    )
}

export default Movies
