import React, { useState } from 'react';
import {BrowserRouter as Router,Route ,Routes, NavLink} from "react-router-dom";
import Home from './Home';
import About from './About';
import Gallary from './Gallary';
import Product from './Product';
import Contact from './Contact';
import './Navbar.css'
import ScrollToTop from "../Component/linktotop"



function App()
{
    const [isActive, setActive] = useState("false");
    const [isCheck, setCheck] = useState("false");
    const [isbar, setbar] = useState("false");
    
const show=()=>
{

    setCheck(!isCheck);
    setActive(!isActive);
    setbar(!isbar);
}
    return(
        <>
        <Router>
            <ScrollToTop />
           
        <nav className={isCheck ? " main-navbar" : " main-navbar-close"}>
            <div className="logo-text">
                <span className="navbar-logo"></span>
            </div>
            <div className='menu-btn'>
                <div  className={isCheck ? "check-button-close" : "check-button-open"} onClick={show}>   </div >
               </div>

        <div className={isActive ? "navbar-links" : "navbar-links-after"}>
        
            <NavLink exact activeClassName="active" to="/" className="navbar-items">Home <div className='navbar-hover-lines'/></NavLink>
            <NavLink activeClassName="active" to="/about" className="navbar-items">About <div className='navbar-hover-lines'/></NavLink>
            <NavLink activeClassName="active" to="/gallary" className="navbar-items">Gallary <div className='navbar-hover-lines'/></NavLink>
            <NavLink activeClassName="active" to="/product" className="navbar-items">Product <div className='navbar-hover-lines'/></NavLink>
            <NavLink activeClassName="active" to="/contact" className="navbar-items">Contact <div className='navbar-hover-lines'/></NavLink>
            
        </div>


        </nav>
        
           <Routes>         
               <Route path="/" element = {<Home />}></Route>   
               <Route path="/about" element = {<About />}></Route>
               <Route path="/gallary" element = {<Gallary />}></Route>      
               <Route path="/product" element = {<Product />}></Route>   
               <Route path="/contact" element = {<Contact />}></Route>           
           </Routes> 
        
        </Router>
    </>
    )
}

export default App;