import React from 'react';
import Logo from '../images/logo.png';
import "../header.css"
// import {Link} from 'react-scroll'

function header(){


    return (
        <nav>
           <img src={Logo} alt=""/>
<div>
   <ul id='navbar'>
    <li><a href="" className='active'>Home</a></li>
    <li><a href="">AboutUs</a></li>
    <li><a href="">SignUp</a></li>
    <li><a href="">LogIn</a></li></ul> 
</div>
</nav>
       
    )
}
export default header;