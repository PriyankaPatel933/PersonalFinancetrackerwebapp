import React, { useState } from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { SiExpensify } from "react-icons/si";
import { FaUserLock } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa6";
const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle dropdown state
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                {/* Dashboard */}
                <div className="sidebar-option">
                    <MdDashboardCustomize /> 
                    <NavLink to="/add">
                        <p>Dashboard</p>
                    </NavLink>
                </div>
                
                {/* User-Profile with Dropdown */}
                <div className="sidebar-option" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <FaUserLock /> 
                    <p>Register&LogIn</p>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                            <Link to="/logIn">User Login</Link>
                            <Link to="/signIn">User Register</Link>
                            
                        </div>
                    )}
                </div>
                    
             
                <div className="sidebar-option">
                    <FaUserEdit />
                    <Link to="/userprofile">
                        <p>Create-Profile</p>
                    </Link>
                </div>


                
                <div className="sidebar-option">
                    <FaUserTie />
                    <Link to="/userprofile">
                        <p>Your-Profile</p>
                    </Link>
                </div>


                <div className="sidebar-option">
                    <GiTakeMyMoney />
                    <Link to="/income">
                        <p>Incomes</p>
                    </Link>
                </div>
                
                {/* View Transaction */}
                <div className="sidebar-option">
                    <GrTransaction />
                    <Link to="/trans">
                        <p>View Transaction</p>
                    </Link>
                </div>
                
                {/* Expenses */}
                <div className="sidebar-option">
                    <SiExpensify /> 
                    <p>Expenses</p>
                </div>
                <div className="sidebar-option">
    <IoSettings />
    <p>setting</p>
    <div className="dropdown">
        <span className="arrow">&#9662;</span>
        <div className="dropdown-content">
            <label>
                <select name="payment">
                    <option value="">Select pages</option>
                    <option value="Forgot-Password">Forgot-Password</option>
                    <option value="Entertainment">Change-Password</option>
                    <option value="Lock-Screen">Lock-Screen</option>
                    <option value="Profile">Profile</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
    </div>


</div>


                






                <h2>Extracts</h2>


  {/* User-Profile with Dropdown */}
  <div className="sidebar-option" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <FaUserLock /> 
                    <p>Register&LogIn</p>
                    {isDropdownOpen && (
                        <div className="dropdown-content">
                           
                            <Link to="/adminlogin">Admin Login</Link>
                            <Link to="/adminsignin">Admin Register</Link>
                        </div>
                    )}
                </div>
                    


                <div className="sidebar-option">
    <IoSettings />
    <p>setting</p>
    <div className="dropdown">
        <span className="arrow">&#9662;</span>
        <div className="dropdown-content">
            <label>
                <select name="payment">
                    <option value="">Select pages</option>
                    <option value="Forgot-Password">Forgot-Password</option>
                    <option value="Entertainment">Change-Password</option>
                    <option value="Lock-Screen">Lock-Screen</option>
                    <option value="Profile">Profile</option>
                    <option value="Other">Other</option>
                </select>
            </label>
        </div>
    </div>


</div>


<div className="sidebar-option">
                    <GrTransaction />
                    <Link to="/viewTrans">
                        <p>UserTransaction</p>
                    </Link>
                </div>


                
<div className="sidebar-option">
                    <FaUsers />
                    <Link to="/allUser">
                        <p>AllUser's</p>
                        </Link>
                    
                </div>


<div className="sidebar-option">
                    <VscFeedback />
                    <Link to="/viewFeedBack">
                        <p>View FeedBack</p>
                        </Link>
                    
                </div>


<div className="sidebar-option">
                    <RiLogoutCircleLine />
                    <Link to="/">
                        <p>LogOut</p>
                    </Link>
                </div>

            </div>
            <hr />
        </div>
    );
}

export default Sidebar;


