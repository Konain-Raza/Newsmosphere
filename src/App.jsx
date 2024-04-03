    import { useState , useEffect} from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  import News from "./Components/News"
  import Contact from './Components/Contact'
  function App() {
    const [count, setCount] = useState(0);
    const [news, setNews] = useState([]);
function contactPage(){
  return <Contact/>
}
    const getNews = async() => {
      const request = await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=332d61176ded4e41875db147a522affe");
      const data = await request.json();
    setNews(data.articles);
    }
    useEffect(() => {
    
      getNews();
          }, [])
    return (
    
    <div className='antialiased mb-5'id='mainPage' > 
<div id="header">
<img src="./icon.png" alt="" />
<h1 className='text-6xl font-bold text-center relative'>Newsmosphere</h1>
<p id='tagline' className='absolute '>Stay Informed, Stay Ahead</p>

</div>


  <div id="allNews">
  {
        news.map((artice)=>{
          return <News title={artice.title} cover={artice.urlToImage} url={artice.url} description={artice.description}></News>
        })
      }

  </div>

  
      
    </div>

      
    )
  }

  export default App
