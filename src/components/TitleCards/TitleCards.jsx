import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom';

const TitleCards = ({title, category}) => {

  const [apidata, setApiData] = useState([]);
  const cardsRef = useRef();

  const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on NetFlix - X1nQing"}</h2>
      <div className="card-lists" ref={cardsRef}>
        {apidata.map((card, index) =>{
          return <Link to={`/player/${card.id}`} className="cards" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
