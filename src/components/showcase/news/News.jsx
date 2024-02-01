import { useEffect, useState } from 'react'
import './style.css'

const News = () => {

    const [news, setNews] = useState()

    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_KEY}`;


    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setNews(result)
            } catch (error) {
                console.error(error);
            }
        }
        fetchNews()

    }, [])

    return (
        <div className='news'>
            <div className="news-img">
                <img src={news?.articles[10].urlToImage} alt="" />

            </div>
            <div className="news-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis aut incidunt animi quos in dolore. Molestias reprehenderit non quos amet earum! Porro maiores, assumenda aperiam expedita vero quisquam vel inventore reprehenderit nobis repudiandae necessitatibus alias possimus consectetur neque consequuntur sunt ipsam dolore. Nobis </div>
        </div>
    )
}

export default News
