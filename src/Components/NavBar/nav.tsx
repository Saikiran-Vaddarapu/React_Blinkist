/* eslint-disable no-lone-blocks */
import React, { DOMElement, useEffect, useRef } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import '/home/saikiv/Documents/REACT/library/src/Components/NavBar/nav.css';
import Detailview from '../../Detailview';
import BookView from '../Detailed/BookView';

const NavBar : React.FC = (props) =>
{
    const elementRef = useRef();
  /*  useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
    }, []); */
    function popUp()
    {
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        k.style.display = "block";
    }
   /* let divElement : any = elementRef.current;
    console.log(divElement.id);
    let k : any  = document.getElementById(divElement.id);
    /* function popUp() {
         k.style.display = "block";
    } */
    window.onclick = function(event) {
        let divElement : any = elementRef.current;
        console.log(divElement.id);
        let k : any  = document.getElementById(divElement.id);
        if (event.target === k) {
          k.style.display = "none";
        }}  
    return (   
       <>
        <nav>
            <ul>
            <li><a href = '#'> Blinkist </a></li>
            <li><a href = '#'> <i className="fa fa-search"></i></a></li>
            <li onClick={popUp} id="two"><a href='#'> Explore </a></li>
            <li><a href = '#'> My Library </a></li> 
           {/*  <li>
                 <Link to= "/"> Link1 </Link>
             </li>
             <li>
                 <Link to = "/kk"> Link2</Link>
           </li> */}
            </ul>
        </nav>
      <div className='explore' id='one' ref ={elementRef}>
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
                  <li> Entrepreneurship </li>
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
       </>
    );
}

export default NavBar;

 {/* 

         <header>
           <div id = "blink"></div>
           <div id = "search"> <i className="fa fa-search"></i>   </div>
           <div id = "explore"> Explore </div>
           <div id = ""></div>
       </header>
       */}