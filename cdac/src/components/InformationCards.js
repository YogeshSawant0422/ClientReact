import React from "react";
//import { useNavigate } from "react-router-dom";
import '../css/InformationCard.css';
import Photo01 from "../assets/Photo01.jpg";
import Photo02 from "../assets/Photo02.png";
import Photo03 from "../assets/Slide03.jpg";
import Photo04 from "../assets/Photo04.jpg";
import Photo05 from "../assets/Photo05.jpg";
import Photo06 from "../assets/Photo06.jpg";

const ImageHeight = {
    height:"100%",
    width:"100%"
}

function InformationCards()
{
    return(
        <section className="InfoCard">
            <div>
               <img src={Photo01} alt="Info" style={ImageHeight}/>
            </div>
            <div>
                <img src={Photo02} alt="Info" style={ImageHeight}/>
            </div>
            <div>
                    <img src={Photo03} alt="Info" style={ImageHeight}/>
            </div>
            <div>
                <img src={Photo04} alt="Info" style={ImageHeight}/>
            </div>
            <div>
                 <img src={Photo05} alt="Info" style={ImageHeight}/>
            </div>
            <div>
                <img src={Photo06} alt="Info" style={ImageHeight}/>
            </div>
        </section>
       
    )
}

export default InformationCards;