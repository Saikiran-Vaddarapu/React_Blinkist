import React, { useState } from "react";
import Finished from "./Components/ReadFinished/Finished";
import NavBar from "./Components/NavBar/nav";
import Footer from "./Components/Footer/footer";
import './Components/ReadFinished/Finish.css';
import Image from "./Components/Atoms/Image";

function Finishview() : JSX.Element
{
    const [isCurrent ,setIsCurrent ] = useState(true);
    const updateCurrent = (tempCurrent : boolean ) =>
    {
        setIsCurrent(tempCurrent);
    }

    return(
      <>
      <Finished onClicked={(temp : boolean)=>updateCurrent(temp)}/>
       { isCurrent ? <div>
            <Image isRead="currently" />
        </div> :
        <div>
            <Image isRead="finished" />
        </div>}
      </>
    );
}

export default Finishview;