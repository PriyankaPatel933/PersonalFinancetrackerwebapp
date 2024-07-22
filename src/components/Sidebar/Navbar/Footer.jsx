import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
       
          <a href="#" ><BsFacebook/></a>
          <a href="#" ><FaTwitter/></a>
          <a href="#"><FaSquareInstagram/></a>
          <a href="#" ><FaLinkedin/></a>
        </div>
        <div className="credit">
          you can also connected by these <span>Social media links </span> | for much better experience
        </div>
        <div className="links">
          <a href="#">Email-ft@gmail.com</a>
    
          <a href="#">contact.no-878798909887</a>
          <a href="#">reminder&notification</a>
        </div>
        <div className="credit">
          created during  <span>internship project </span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;