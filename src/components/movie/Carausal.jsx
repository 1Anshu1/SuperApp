import React, { useEffect, useState } from 'react'

const Carausal = () => {

    const [movie, setMovie] = useState([])

    const myGenre = JSON.parse(localStorage.getItem('myGenre'))

    const option = {
        headers: {
            'Authorization': `bearer ${import.meta.env.VITE_TOKEN_KEY}`
        }
    }

    const fetchData = async () => {
        for (let i of myGenre) {
            const res = await fetch(`https://api.themoviedb.org/3/search/collection?query=${i}&language=en-US&page=1`, option)
            const { results } = await res.json()
            for (let j of results) {
                console.log(j.poster_path)
                setMovie(prev => [...prev, { [i]: j.poster_path }])
            }
        }
        console.log(movie)

    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            {
                // myGenre[i].map()
            }
        </div>
    )
}

export default Carausal
