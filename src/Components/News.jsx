import React, { useState , useEffect} from 'react'
import "./News.css"
function News(props) {
  const [likes, setLikes] = useState(0);
  const [likeurl, setLikeurl] = useState("./unfilled-heart.png");

  function increaseLike() {
    if (likeurl === "./unfilled-heart.png") {
      setLikeurl("./filled-heart.png");
    } else if (likeurl === "./filled-heart.png") {
      setLikeurl("./unfilled-heart.png");
    }
  }

  return (
    <div>
      <div id="news">
        <h1 id='articleTitle' className='font-bold text-2xl mb-5'>News {props.title}</h1>
        {props.cover && <img src={props.cover} alt={props.title} />}
        <p className='font-bold mb-5 mt-5' id='description'>{props.description}</p>
        <div id="buttonBox" className='flex text-center justify-end'>
          <a href={props.url} target='_blank' id='button'>Read More</a>
          <button id='likesButton' onClick={increaseLike}><img src={likeurl} alt="" /></button>
        </div>
      </div>
    </div>
  );
}


export default News