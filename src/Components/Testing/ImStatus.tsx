import React from "react";
import {books} from './books';
import './stylesthis.css';
//import '/home/saikiv/Documents/REACT/library/src/App.css';
const ImStatus : React.FC<{ isRead : boolean}> = (props) =>
{
     let check = books.filter(book => book.isFinished === props.isRead)
     return(
         <div className="container">
               {check.map(book => <div className="testImg"> 
                   <img src = {book.image} alt = "null"></img>
                   <h3>{book.title} </h3>
                   <h4> {book.author }</h4>
                   <h5><i className="fa fa-clock-o"></i>{ book.duration}- minute read </h5>
                   <p onClick= {()=>(book.isFinished)? book.isFinished = false: book.isFinished= true} >{ (book.isFinished === true) ? <b> Read Again </b> : <b> Finish Reading </b>} </p>
                    </div>) }
         </div>
     );
}

export default ImStatus;

/* 
 { books.map(book => <div className="testImg"> 
                   <img src = {book.image} alt = "null"></img>
                   <h3>{book.title} </h3>
                   <h4> {book.author }</h4>
                   <h5><i className="fa fa-clock-o"></i>{ book.duration}- minute read </h5>
                   { (book.isFinished === true) ? <b> Finished </b> : <b> Read Again </b> }
                    </div> ) }
*/