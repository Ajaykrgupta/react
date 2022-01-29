import React from "react";
import {Routes, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFoundPage from './NotFoundPage';

function Routing(){
    return (
        <div style={{textAlign:"center"}}>
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFoundPage />} />
                        
                </Routes>
                
            
        </div>
    )
}

export default Routing;