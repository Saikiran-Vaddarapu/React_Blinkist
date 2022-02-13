import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ImageS : React.FC< {isRead : string , url : string} >  = (props) =>
{
   const [status ,setStatus] = useState("currently");
   console.log(status);
   var stat : string = status;
   var isRead: string = props.isRead;
   var url : string = props.url;
   const nav = useNavigate();
   const handleClick = () =>
   {
         if(status === "currently")
         setStatus("finished");
         else
         setStatus("currently");
         console.log(status);
         stat = status;
         nav('/book')
   }
   return(
       <>
       { (stat === isRead) ?
         <>
         <img src= {url} alt = "null"/>
         <h3> Beyond 2.0 </h3>
         <h4> JC.Collins </h4>
         <h5><i className="fa fa-clock-o"></i>13 min read </h5>
         <p id='m' onClick={handleClick}>{(status === "currently") ? <b> Finish Read </b>:<b> Read Again </b> }</p>
         </>
         : 
         <>
         </>
         }
       </>
   );
}

export default  ImageS;