import React from 'react';
import '../NewsLetter/NewsLetter.css';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Suscribe to our newletter ans stay updated</p>
        <div>
             <input type="email" placeholder='Your Email id'/>
            <Link to='https://www.youtube.com/channel/UCybBbeJqO3iLTU-8Wqw_5tg'> <button> Suscribe </button> </Link> 
        </div>
    </div>
  )
}

export default NewsLetter;