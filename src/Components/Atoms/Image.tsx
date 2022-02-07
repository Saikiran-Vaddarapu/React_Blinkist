import React, { useState } from "react";
import "/home/saikiv/Documents/REACT/library/src/App.css";
import Detailview from "../../Detailview";
import ImageS from "./ImageS";

const Image : React.FC<{ isRead : string}>= (props) =>
{
   const x : string = props.isRead;
   return(
      <div className="Img">

      <div className="Imginside">
      <div className="Imgdata">
      <ImageS isRead= {x} url = "https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg"/>
      </div>
      <div className="Imgdata">
      <ImageS isRead= {x} url = "https://i.postimg.cc/4NWrYtds/image.jpg"/>
      </div>
      <div className="Imgdata">
      <ImageS isRead= {x} url = "https://i.postimg.cc/tTkdjJLJ/how-the-mighty-fall-original-imag7kbqtgq7spjc.jpg"/>
      </div>
      </div>

      <div className="Imginside">
      <div className="Imgdata">
      <ImageS isRead= {x} url = "https://i.postimg.cc/vmhrfD3y/image.jpg"/>
      </div>
      <div className="Imgdata">
      <ImageS isRead= {x} url = "https://i.postimg.cc/DZVgPmXY/61rr-DQMD8-L-AC-UL160-SR160-160.jpg"/>
      </div>
      <div className="Imgdata">
      <ImageS isRead= {x} url = "https://i.postimg.cc/XJznPSnh/Key-Performance-Indicators.jpg"/>
      </div>
    {/*  <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
      </div>

      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
      </div>
      </div>

      <div className="Imginside">
      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3>Title </h3>
         <h4> Author </h4>
      </div>
      
      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
      </div>

      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
      </div>
      </div>

      <div className="Imginside">
      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
      </div>
      
      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
      </div>

      <div className="Imgdata">
      <img src="https://images-na.ssl-images-amazon.com/images/I/911-oWq+psL.jpg" alt = "null"/>
         <h3> Title </h3>
         <h4> Author </h4>
   </div> */}
      </div>
      </div>
   );
}

export default Image;


//  const handleChange = (event : any) => {
      /*let x:any;
      x = event.target.id;
      let ele : any = document.getElementById(x);
      const k = ele.getElementsByTagName('b')[0];
      console.log(k.textContent); */
      // eslint-disable-next-line react/jsx-no-comment-textnodes
  //  }