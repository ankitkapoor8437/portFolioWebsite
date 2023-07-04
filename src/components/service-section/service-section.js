import React from "react";
import '../service-section/service-section.css';



const ServiceSection = () => {
    return(
        // <!-- Services Section -->
        <div id="services">
            <div className="container">
                <h1 className="subTitle">My Expertise</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Design</h2>
                        <p>As a web developer, I possess a range of technical skills necessary to build and maintain
                            websites. I have expertise in HTML, CSS, and JavaScript, which allows me to create engaging
                            and interactive web pages. My knowledge of CSS frameworks like
                            Bootstrap and Tailwind CSS enables me to create engaging designs efficiently.</p>
                        <a href="">Learn More</a>
                    </div>
                    <div>
                        <i className="fa-solid fa-crop"></i>
                        <h2>UX UI</h2>
                        <p>I possess a strong understanding of user-centered design principles and have experience in
                            creating intuitive and visually appealing user interfaces for various digital platforms. My
                            proficiency in design tools like Sketch, Figma, and Adobe Creative Suite enables me to
                            create wireframes, prototypes, and high-fidelity mockups efficiently. I also have experience
                            in conducting user research, usability testing, and iterating designs based on user
                            feedback.</p>
                        <a href="">Learn More</a>
                    </div>
                    <div>
                        <i className="fa-brands fa-app-store"></i>
                        <h2>Frameworks</h2>
                        <p>I have experience in using several web frameworks, including Django, Flask, and Express.js. I
                            am proficient in building RESTful APIs, handling database operations, and implementing user
                            authentication and authorization using these frameworks. Additionally, I have a good
                            understanding of frontend frameworks like React, enabling me to create full-stack
                            web applications.</p>
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
} 


export default ServiceSection;