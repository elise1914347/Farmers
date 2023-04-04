import React from "react";
 import Farmers from "../images/vt-img.png";
 import "./Farmer.css"
function Farmer(){
    return(
<div className="Farmerground">
    <div className="Farmer">
        <img src={Farmers}/>
    </div>
    <div >
                <h1 className="Vene" >Explore All the <b style={{color:"black"}}>Veterinary</b> <br></br> benefits by creating a person<br></br> account</h1>
                <button><a href="join" >Join</a></button>
            </div>
</div>
    )
}
export default Farmer;