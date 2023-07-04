import React, { useState } from "react";
import "../about-me/Aboutme.css";
import mainImage from "../../assets/main-image.jpeg";

const About = () => {
    const [activeTab, setActiveTab] = useState("experience");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col1">
                        <img src={mainImage} alt="mainImage" />
                    </div>

                    <div className="about-col2">
                        <h1 className="subTitle">About Me</h1>
                        <p>
                            I'm a web developer based in Punjab, originally from Himachal
                            Pradesh. When I'm not coding, you can find me playing the guitar,
                            listening to music, traveling, watching anime, and reading about
                            history. I also love exploring new cafes and trying different
                            cuisines, and weekend getaways are always on my list. My hobbies
                            keep me inspired and help me bring a fresh perspective to my work.
                        </p>

                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                                onClick={() => handleTabClick("experience")}
                            >
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                                onClick={() => handleTabClick("skills")}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                                onClick={() => handleTabClick("education")}
                            >
                                Education
                            </p>
                        </div>

                        <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
                            <ul>
                                <li>
                                    <span>
                                        Pantheon India Private Limited, Chennai — <i>Jr. Application Developer</i>{" "}
                                    </span>
                                    <br />
                                    <i>March 2022 - PRESENT</i>
                                    <br />
                                    Pantheon Global Services organization specializes in providing of Wight array of software
                                    development consulting and support services.
                                    <br />
                                    <br />
                                </li>

                                <li>
                                    <span>
                                        Web Developer Freelance, Sampoorn Child Development Center, Noida — <i>Freelance Developer</i>
                                    </span>
                                    <br />
                                    <i>December 2020 - February 2021</i>
                                    <br />
                                    SCDC is a development center for physically and specially challenged children.
                                    <br />
                                    <br />
                                </li>

                                <li>
                                    <span>
                                        Digital Marketing Intern, Batra Pad Printing And Automation, Ludhiana —{" "}
                                        <i>Digital Marketing Intern</i>
                                    </span>
                                    <br />
                                    <i>July 2019 - December 2019</i>
                                    <br />

                                    <br />
                                    <br />
                                </li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
                            <ul>
                                <li>
                                    <span>Languages</span>
                                    <br />
                                    <i> HTML, CSS, JAVASCRIPT, C++, Python</i>
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    <span>Frame-works</span>
                                    <br />
                                    <i> React, Node.js, Express.js, Django </i>
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    <span>Design Platforms</span>
                                    <br />
                                    <i> Adobe Photoshop, Figma, Canva
                                    </i>
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    <span>DataBases</span>
                                    <br />
                                    <i> SQL, MongoDB
                                    </i>
                                    <br />
                                    <br />
                                </li>
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
                            <ul>
                                <li>
                                    <span>Guru Gobind Singh Indraprastha University, Delhi</span>
                                    <br />
                                    <i> August 2017 - July 2021</i>
                                    <br />
                                    Graduated with B.Tech Degree in Computer Science Engineering.
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    <span> USPC Jain Public School, Ludhiana</span>
                                    <br />
                                    <i> March - 2017</i>
                                    <br />
                                    Completed my 12th Standard with 75.60%.
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    <span> USPC Jain Public School, Ludhiana</span>
                                    <br />
                                    <i> March - 2016</i>
                                    <br />
                                    Completed my 10th Standard with 91.2%.
                                    <br />
                                    <br />
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;