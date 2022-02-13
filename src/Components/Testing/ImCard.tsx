import React from "react";
import { useNavigate } from "react-router-dom";
import {books} from './books';
import './stylesthis.css';
import '/home/saikiv/Documents/REACT/library/src/Components/ReadFinished/Finish.css';
//import '/home/saikiv/Documents/REACT/library/src/App.css';
const ImCard : React.FC<{ isFirst : boolean}> = (props) =>
{
    const nav = useNavigate();
     return(
         <>
         { (props.isFirst) && <h1 className="data"> My Library </h1> }
         <div className="container">
                { books.map(book => <div className="testImg"> 
                   <img src = {book.image} alt = "null"></img>
                   <h3>{book.title} </h3>
                   <h4> {book.author }</h4>
                   <h5><i className="fa fa-clock-o"></i>{ book.duration}- minute read </h5>
                   { (props.isFirst) ? <p id = "threedots"> &hellip;</p> :  <p id = "addLib" onClick={()=>nav("/book")}> + Add to Library </p>}
                    </div> ) }
         </div>
         </>
     );
}

export default ImCard;