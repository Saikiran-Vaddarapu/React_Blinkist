import React, { useRef } from 'react';
import Footer from './Components/Footer/footer';
import Finishview from './Finishview';
import BookView from './Components/Detailed/BookView';
import Card from './Components/Section1/Card';
import { BrowserRouter , Route, Routes, Link ,useNavigate } from 'react-router-dom';
import '/home/saikiv/Documents/REACT/library/src/Components/NavBar/nav.css';

const Navigator : React.FC = () =>
{
    const elementRef = useRef();
    let navigate = useNavigate();
    const handleClick = () =>
    {
        navigate("/book")
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        k.style.display = "none";
    }
    function popUp(): void
    {
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        k.style.display = "block";
    }
    window.onclick = function(event) {
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        if (event.target === k) {
          k.style.display = "none";
        }}  
       return(
        <>
               <nav>
                   <ul>
                       <li><Link to="/"> Blinkist </Link> </li>
                       <li><Link to=""><i className="fa fa-search"></i> </Link></li>
                       <li onClick={popUp}><Link to=""> Explore </Link>  </li>
                       <li><Link to="/book"> Book </Link> </li>
                       <li> <Link to="/finish"> Finished </Link> </li>
                   </ul>
               </nav>
               <div className='explore' id='one' ref={elementRef}>
                   <div className='content'>
                       <div className='titles'>
                           <h4> Explore By Category </h4>
                           <h4> See recently added titles </h4>
                           <h4> See popular titles </h4>
                       </div>
                       <hr></hr>
                       <div className='flexstyle'>
                           <div className='list'>
                               <ul>
                                   <li onClick={handleClick}> Entrepreneurship </li>
                                   <li> Science </li>
                                   <li> Economics </li>
                                   <li> Corporate Culture </li>
                                   <li> Psychology </li>
                                   <li> Nature &amp; Environment </li>
                               </ul>
                           </div>
                           <div className='list'>
                               <ul>
                                   <li> Politics </li>
                                   <li> Health &amp; Nutrition </li>
                                   <li> History </li>
                                   <li> Motivation &amp; Inspiration </li>
                                   <li> Productivity </li>
                                   <li> Career &amp; Success </li>
                               </ul>
                           </div>
                           <div className='list'>
                               <ul>
                                   <li> Marketing &amp; Sales </li>
                                   <li> Personal Development </li>
                                   <li> Communication Skills </li>
                                   <li> Money &amp; Investments </li>
                                   <li> Sex &amp; Relationships </li>
                                   <li> Education </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>

               <Routes>
                   <Route path='/' element={<Card />} />
                   <Route path='/book' element={<BookView />} />
                   <Route path='/finish' element={<Finishview />} />
               </Routes>
           <Footer />
       </>
       );
}

export default Navigator;