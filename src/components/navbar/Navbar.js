import React from "react";
import '../navbar/Navbar.css'
import ExampleComponent from "../typed-animation/typed";


const Navbar = () => {
    return (
        <div className="container">
            <div className="nav">
                <img src="" alt="" class="logo" />
                <ul id="sideMenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    {/* <i class="fa-solid fa-xmark" onclick="closemenu()"></i> */}
                </ul>
                {/* <i className="fa-solid fa-bars" onclick="openmenu()"></i> */}

            </div>


            <div className="header-text">
                <p>
                    Front-End Developer.
                </p>
                <h1>Hi, I am <span ><ExampleComponent /></span>.</h1>
                <p className="description">
                    As a Front End Developer, my objective is to deliver innovative and intuitive web applications that
                    not only meet but exceed user expectations. I am looking for a challenging role that allows me to
                    apply my technical expertise, creativity, and passion for web development, while constantly learning
                    and improving my skills.
                </p>
            </div>
        </div>
    );
}

export default Navbar;