import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import News from './Components/News';
import Contact from './Components/Contact';
import icon from  "../icon.png"
function App() {
  const [count, setCount] = useState(0);
  const [news, setNews] = useState([]);

  function contactPage() {
    return <Contact />;
  }

  const getNews = async () => {
    try {
      const request = await fetch(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=332d61176ded4e41875db147a522affe'
      );
      const data = await request.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="antialiased mb-5" id="mainPage">
      <div id="header">
        <img src={icon} alt="Logo" />
        <h1 className="text-6xl font-bold text-center relative">Newsmosphere</h1>
        <p id="tagline" className="absolute">
          Stay Informed, Stay Ahead
        </p>
      </div>

      <div id="allNews">
        {news.length > 0 ? (
          news.map((article) => (
            <News
              key={article.url} 
              title={article.title}
              cover={article.urlToImage}
              url={article.url}
              description={article.description}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
