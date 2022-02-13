import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function BookView() : JSX.Element
{
   let navigate = useNavigate();
    return(
      <div className='out'>
      <div className='flexStyle'>
      <div className='left'>
      <p> Get the key ideas from </p>
      <h2> Beyond Entrepreneurship 2.0 </h2>
      <h3> Turing your business into an enduring great company</h3>
      <h4> Ny Jim Collins and Bill lazier </h4>
      <button type='button' onClick={()=>navigate("/finish")}> Read Now </button>
      <button type='button' onClick={()=>navigate("/finish")}> Finished Reading </button>
      </div>
      <div className='right'>
          <img src = "https://images.blinkist.io/images/books/608bc8bb6cee070008a8f57e/1_1/470.jpg" alt="null"></img>
      </div>
      </div>
      <div>
          <div style={{display : "flex" }}>
             <div className='bottom' style={{borderBottom : "2px solid #2CE080"}}> Synopsis </div>
             <div className='bottom'> Who's it For </div>
             <div className='bottom'> Author </div>
          </div>
          <div className='bottomContent'>
          Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.
          </div>
      </div>
      </div>
    );
}

export default BookView;