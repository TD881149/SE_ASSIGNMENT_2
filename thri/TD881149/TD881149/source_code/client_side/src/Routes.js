import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./components/home";
import News from "./components/news";
import UpdateInfo from "./components/updateinfo";
const MainRoute = ({ props }) => {
    return (
        <switch>
<Route path="/" element={<Home />} /> 
<Route path="/news" element={<News />} /> 
<Route path="/updateinfo" element={<UpdateInfo />} /> 
        </switch>
    );
}
export default MainRoute