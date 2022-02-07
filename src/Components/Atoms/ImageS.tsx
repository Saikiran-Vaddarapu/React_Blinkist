import React, { useState } from 'react';

const ImageS : React.FC< {isRead : string , url : string} >  = (props) =>
{
   const [status ,setStatus] = useState("currently");
   console.log(status);
   var stat : string = status;
   var isRead: string = props.isRead;
   var url : string = props.url;
   const handleClick = () =>
   {
         if(status === "currently")
         setStatus("finished");
         else
         setStatus("currently");
         console.log(status);
         stat = status;
   }
   return(
       <>
       { (stat === isRead) ?
         <>
         <img src= {url} alt = "null"/>
         <h3> Beyond 2.0 </h3>
         <h4> JC.Collins </h4>
         <p id='m' onClick={handleClick}>{(status === "currently") ? <b> Finished Read </b>: <b> Read Again </b> }</p>
         </>
         : 
         <>
         </>
         }
       </>
   );
}

export default  ImageS;