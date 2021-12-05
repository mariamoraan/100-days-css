import React from 'react';
import Challenge1 from '../challenges/challenge1';
import './styles.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Layout = () =>{
    return(
        <BrowserRouter>
            <div className="layout">
                <Routes>
                    <Route path="/" element={<Challenge1/>} />
                    <Route path="/challenge-1" element={<Challenge1/>} />
                </Routes>
            </div>    
        </BrowserRouter>
    )
}

export default Layout;