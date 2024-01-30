import { useEffect, useState } from 'react'
import './style.css'

const News = () => {

    const [news, setNews] = useState()

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f082039701004964a5e83f8bf9479a91';


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

    console.log(news)
    return (
        <div className='news'>
            <div className="news-img">
                <img src={news?.articles[10].urlToImage} alt="" />

            </div>
            <div className="news-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis aut incidunt animi quos in dolore. Molestias reprehenderit non quos amet earum! Porro maiores, assumenda aperiam expedita vero quisquam vel inventore reprehenderit nobis repudiandae necessitatibus alias possimus consectetur neque consequuntur sunt ipsam dolore. Nobis omnis ullam ab inventore quam repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deleniti distinctio fugit explicabo molestiae quaerat architecto vel tempore eos? Distinctio libero, non dignissimos excepturi dolorum voluptatum molestiae quas officiis labore.</div>
        </div>
    )
}

export default News
