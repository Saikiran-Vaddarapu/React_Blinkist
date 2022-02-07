import React from 'react';
import './Finish.css';
export type finishedProps = {
    onClicked ?: (temp : boolean) => void 
}
const Finished : React.FC< finishedProps >= (props) =>
{
    const handleClick = (e : any) =>
    {
         console.log(e.target.id);
         if(e.target.id === "one")
         {
             props.onClicked?.(true);
         }
         else
         props.onClicked?.(false);

    }
    return(
    <div className='data'>
    <h1> My Library </h1>
    <div className='disp'>
    <div className='readingStatus' id = "one" onClick={handleClick} > 
    <h3> Currently Reading </h3>
    <hr></hr>
    </div>
    <div className='readingStatus' id = "two" onClick={handleClick}>
    <h3> Finished Reading </h3>
    <hr></hr>
    </div>
    </div>
    </div>
    );
}

export default Finished;