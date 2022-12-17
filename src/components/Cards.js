import { useState } from 'react';
import './Cards.css';

const API_IMG = "https://image.tmdb.org/t/p/w500"
const Cards = ({ title, poster_path, vote_average }) => {

    return (
        <div className='Cards'>
            <img src={API_IMG + poster_path} className='MoviePoster' />
            <p className='Rating'>
                {vote_average}
            </p>
            <p className='MovieName'>
                {title}
            </p>
        </div>

    )
}
export default Cards;