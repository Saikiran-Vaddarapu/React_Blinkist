import React from "react";
import "./footstyle.css";
import Footerdata from "./footerdataleft";
import FooterLists from "./footerlists";


let list1 : string[],list2 : string[],list3 : string[];
list1 = ["Editorial","Booklists ","React Notification "," What to Read Next"];
list2 = ["Useful links","Pricing","Blinklist Business ","Gift Cards","Contact and help"];
list3 = ["Company","About ","Careers","Partners"];

const Footer: React.FC = () =>
{
    return(
        <div className="foot">
          <div className="footContent">
            <Footerdata />
            <div className="footright">
                <FooterLists list = {list1} />
            </div>
            <div className="footright">
                <FooterLists list = {list2} />
            </div>
            <div className="footright">
                <FooterLists list = {list3} />
            </div>
          </div>
        </div>
    );
}
export default Footer;