import React from "react";
import Header from "./component/pages/header";
import Home from "./component/pages/homepage";
import Veterinaire from "./component/pages/veterinaire";
import Farmer from "./component/pages/Farmer";
import Amata from "./component/pages/Amata";
import Mpas from "./component/pages/mpas";
import Footer from "./component/pages/Footer";
const App=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <Veterinaire/>
        <Farmer/>
        <Amata/>
        <Mpas/>
        <Footer/>
        </>
    );   
};

export default App;
