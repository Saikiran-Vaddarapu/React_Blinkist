import { useState } from "react";
import Finished from "./Components/ReadFinished/Finished";
import './Components/ReadFinished/Finish.css';
import ImStatus from "./Components/Testing/ImStatus";

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
            <ImStatus isRead = {false} />
        </div> :
        <div>
            <ImStatus isRead= {true} />
        </div>}
      </>
    );
}

export default Finishview;