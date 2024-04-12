import React, { useState, useEffect } from 'react';
import reactLogo from '../icon.png';
import './App.css';
import News from './Components/News';
import Contact from './Components/Contact';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=332d61176ded4e41875db147a522affe'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="antialiased mb-5" id="mainPage">
      <div id="header">
        <img src={reactLogo} alt="React Logo" />
        <h1 className="text-6xl font-bold text-center relative">Newsmosphere</h1>
        <p id="tagline" className="absolute">
          Stay Informed, Stay Ahead
        </p>
      </div>

      <div id="allNews">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          news.map((article, index) => (
            <News
              key={article.url}
              title={article.title}
              cover={article.urlToImage || ''}
              url={article.url}
              description={article.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
