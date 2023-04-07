import React from "react";
import logo from "../images/logo.png"
import "./Footer.css"
const Footer=()=>{
return(
    <div className="footer">
        <img  className="logo" src={logo}/>
        
        <div className="sb_footer section_padd1">
            <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                    <h4>Company</h4>
                    <a href="/Home">
                        <p>Home</p>
                    </a>
                    <a href="/AboutUs">
                        <p>AboutUs</p>
                    </a>
                    <a href="/Partners">
                        <p>Partners</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Legal</h4>
                    <a href="/Terms&Condition">
                        <p>Terms&Condition</p>
                    </a>
                    <a href="/privacypolicy">
                        <p>Privacy Policy</p>
                    </a>
                    <a href="/Cookies Policy">
                        <p>Cookies Policy</p>
                    </a>
                </div>
                <div className="sb_footer-links_div">
                    <h4>Accounts</h4>
                    <a href="/Login">
                        <p>Login</p>
                    </a>
                    <a href="/SignUp">
                        <p>Signup</p>
                    </a>
                    <h4>Contact Us</h4>
                    <a href="">info@mmpas.rw</a>
                </div>
                <div className="sb_footer-links_div">
                    
                </div>
            </div>
        </div>

    </div>
);
};

export default Footer;