import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    





  return (
    <>
    <header className="header">
        <a href="#" className="logo">
            <img src="/public/logo3.webp" alt="" />
        </a>
        <nav className="navbar">
            <a href="#home"> <Link to="/">Home</Link> </a>
            <a href="#BudgetTracking"> <Link to="/trans"> TrackingExpanse </Link></a>
            <a href="learn">EductionalResources</a>
            <a href="#BudgetTracking"> <Link to="/contactUs"> FeedBack </Link></a>
            <a href="#Remindre&Notification">Remindre&Notification</a>
        </nav>
        <div className="icons">
            <div className="fas fa-search"  
            >
              
            <Link to="/Sidebar">
                <div className="fa-solid fa-user"></div>
                </Link>

                <div className="fa-solid fa-bars" id="menu-btn"></div>
     
            </div>

     

         

        </div>
    </header>
     
    </>
  );
};

export default Navbar;
