import { useEffect, useState } from 'react'
import './style.css'
import Profile from '../../components/showcase/profile/Profile'
import Weather from '../../components/showcase/weather/Weather';
import Notes from '../../components/showcase/notes/Notes';
import News from '../../components/showcase/news/News';
import Timer from '../../components/showcase/timer/Timer'

const Showcase = () => {

    const [user, setUser] = useState();
    const [genre, setGenre] = useState();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'))
        const genreData = JSON.parse(localStorage.getItem('myGenre'))

        userData ? setUser(userData) : setUser(null)
        genreData ? setGenre(genreData) : setGenre(null)
    }, [])

    return (
        <div className='showcase'>
            <div className="wrapper">
                <div className="box1">
                    <Profile user={user} genre={genre} />
                </div>
                <div className="box2">
                    <Weather />
                </div>
                <div className="box3">
                    <Notes />
                </div>
                <div className="box4">
                    <Timer className='box4' />
                </div>
                <div className="box5">
                    <News className='box5' />
                </div>
            </div>
        </div>
    )
}

export default Showcase
