import React from "react";
import Image from "../images/mcc-img.jpg";
import "./Amata.css"


function Amata(){
    return(
        <div>
        <div className="Explor">
            <h1 className="ill" >Join other Milk Collection <br></br>Centers MCC and<b><br></br>grow your business</b> </h1>
            <button><a href="">Create Account</a></button>
        </div>
        <div className="Amat">
            <img src={Image}/>
        </div>

    </div>
    );
};
export default Amata;