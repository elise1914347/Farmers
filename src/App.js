import React from "react";
import Header from "./component/pages/header";
import Home from "./component/pages/homepage";
import Veterinaire from "./component/pages/veterinaire";
import Farmer from "./component/pages/Farmer";
const App=()=>{
    return(
        <>
        <Header/>
        <Home/>
        <Veterinaire/>
        <Farmer/>
        </>
    );   
};

export default App;
