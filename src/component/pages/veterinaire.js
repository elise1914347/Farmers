import React from "react";
import Amata from "../images/fmr-img.jpg"
import "./veterinaire.css"

function Veterinaire(){
    return(
        <div>
            <div className="Explore">
                <h1 className="all" >Explore All the <b style={{color:"black"}}>Farmer</b> <br></br> benefits by creating a person<br></br> account</h1>
                <button><a href="">GET STARTED</a></button>
            </div>
            <div className="Amata">
                <img src={Amata}/>
            </div>

        </div>
    )
}
export default Veterinaire;