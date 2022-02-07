import React from 'react';
import './Book.css';
import { useNavigate } from 'react-router-dom';

function BookView() : JSX.Element
{
   let navigate = useNavigate();
    return(
      <div className='out'>
      <div className='left'>
      <p> Get the key ideas from </p>
      <h2> Beyond Entrepreneurship 2.0 </h2>
      <h3> Turing your business into an enduring great company</h3>
      <h4> Ny Jim Collins and Bill lazier </h4>
      <button type='button' onClick={()=>navigate("/finish")}> Read Now </button>
      <button type='button'> Finished Reading </button>
      </div>
      <div className='right'>
          <img src = "https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt="null"></img>
      </div>
      </div>
    );
}

export default BookView;