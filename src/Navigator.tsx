import React, { useRef } from 'react';
import Footer from './Components/Footer/footer';
import Finishview from './Finishview';
import BookView from './Components/Detailed/BookView';
import Card from './Components/Section1/Card';
import ImCard from './Components/Testing/ImCard';
import BasicTabs from './Components/ReadFinished/MUI';

import { Route, Routes, Link ,useNavigate } from 'react-router-dom';
import '/home/saikiv/Documents/REACT/library/src/Components/NavBar/nav.css';

const Navigator : React.FC = () =>
{
    const elementRef = useRef();
    const bordBottom = useRef();
    let navigate = useNavigate();
    const handleClick = () =>
    {
        navigate("/entrepreneur")
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        k.style.display = "none";

        let explore : any = bordBottom.current;
        let g : any  = document.getElementById(explore.id);
        g.style.borderBottom = "3px solid white";
        let anchor : any = g.getElementsByTagName('a')[0];
        anchor.style.color = "black";
    }
    const popUp = () =>
    {
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        k.style.display = "block";

        let explore : any = bordBottom.current;
        console.log(explore.id);
        let g : any  = document.getElementById(explore.id);
        console.log(g.innerHTML);
        g.style.borderBottom = "3px solid green";
        let anchor : any = g.getElementsByTagName('a')[0];
        anchor.style.color = "#8FD400";
    }
    window.onclick = function(event) {
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        if (event.target === k) {
          k.style.display = "none";
        
// logic to change back explore green to black on windows click on explore popUp

        let explore : any = bordBottom.current;
        let g : any  = document.getElementById(explore.id);
        g.style.borderBottom = "3px solid white";
        let anchor : any = g.getElementsByTagName('a')[0];
        anchor.style.color = "black";
        }
    }  
       return(
        <>
               <nav>
                   <ul>
                       <li><Link to="/"><img src='https://i.postimg.cc/Qx4563cd/Blinklist1.png' alt = "null" style={{ width : "124px", height : "26px" }}/></Link> </li>
                       <li><Link to=""><i className="fa fa-search"></i> </Link></li>
                       <li onClick={popUp} ref = {bordBottom} id = "u" style={{ borderBottom : "3px solid white" }}> <Link to=""> Explore </Link>  </li>
                      {/* <li><Link to="/book"> Book </Link> </li>
                       <li> <Link to="/finish"> Finished </Link> </li>
                       <li><Link to="/test"> Test </Link></li>
                        <li><Link to = "/mui"> MUI </Link></li>
                       <li><Link to="/entrepreneur"> Card</Link></li> */}
                       <li><Link to = ""> My Gallery </Link></li>
                      
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
                                   {/* < i className='material-icons'>notifications</i> */}
                                   <li onClick={handleClick} >< i className='material-icons'>notifications</i> Entrepreneurship </li>
                                   <li><i className="material-icons">device_hub</i> Science </li>
                                   <li><i className="material-icons">album</i> Economics </li>
                                   <li><i className="material-icons">subtitles</i>Corporate Culture </li>
                                   <li><i className="material-icons">directions</i> Psychology </li>
                                   <li><i className="material-icons">spa</i> Nature &amp; Environment </li>
                               </ul>
                           </div>
                           <div className='list'>
                               <ul>
                                   <li><i className="material-icons">account_balance</i> Politics </li>
                                   <li><i className="material-icons">alarm_add</i> Health &amp; Nutrition </li>
                                   <li><i className="material-icons">assignment</i> History </li>
                                   <li><i className="material-icons">filter_list</i> Motivation &amp; Inspiration </li>
                                   <li><i className="material-icons">gamepad</i> Productivity </li>
                                   <li><i className="material-icons">gesture</i> Career &amp; Success </li>
                               </ul>
                           </div>
                           <div className='list'>
                               <ul>
                                   <li><i className="material-icons">local_library</i> Marketing &amp; Sales </li>
                                   <li><i className="material-icons">person_outline</i> Personal Development </li>
                                   <li><i className="material-icons">comment</i> Communication Skills </li>
                                   <li><i className="material-icons">star</i> Money &amp; Investments </li>
                                   <li><i className="material-icons">whatshot</i> Sex &amp; Relationships </li>
                                   <li><i className="material-icons">create</i> Education </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>

               <Routes>
                   <Route path='/' element={<ImCard isFirst = {true} />} />
                   <Route path='/book' element={<BookView />} />
                   <Route path='/finish' element={<BasicTabs />} />
                   <Route path='/test' element={<ImCard isFirst = {true}/>} />
                   <Route path='/entrepreneur' element={<Card />} />
                   <Route path='/mui' element={<BasicTabs />} />
               </Routes>
           <Footer />
       </>
       );
}

export default Navigator;