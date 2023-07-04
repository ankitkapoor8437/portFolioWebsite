import React from "react";
import '../portfolio-section/portfolio-section.css';
import work1 from '../../assets/work-1.png';
import work2 from '../../assets/work-2.png';
import work3 from '../../assets/work-3.png';
import work4 from '../../assets/work-4.jpg';
import work5 from '../../assets/work-5.jpg';
import work6 from '../../assets/work-6.jpg';

const PortfolioSection = () => {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="subTitle">My Projects</h1>
                {/* <!-- WORK ROW1 --> */}
                <div className="work-list">
                    <div className="work">
                        <img src={work4} alt="" />
                        <div className="layer">
                            <h3 className="project-headings">Personal Portfolio Website</h3>
                            <p>
                                Using my skills in HTML, CSS, and JavaScript, I built a captivating portfolio that
                                showcases my talents and achievements in a visually stunning and interactive way.
                            </p>
                            <a href="https://personal-portfolio-ankitkapoor.netlify.app/"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work2} alt="" />
                        <div className="layer">
                            <h3 className="project-headings"> Weather Application Using API's </h3>
                            <p>
                                I developed a sleek and user-friendly weather app using RapidAPIs, Bootstrap, and
                                JavaScript that provides up-to-date weather information and forecasts for any location
                                in a matter of seconds.
                            </p>
                            <a href="https://weather-application-ankitkapoor.netlify.app/"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work3} alt="" />
                        <div className="layer">
                            <h3 className="project-headings">Movie Review System</h3>
                            <p>
                                Utilizing my skills in Bootstrap, JavaScript, Flask, and Heroku, I created a seamless
                                movie review system that allows users to browse and rate movies with ease and
                                convenience.
                            </p>
                            <a href=""><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>

                {/* <!-- WORK ROW2 --> */}
                <div className="work-list">
                    <div className="work">
                        <img src={work1} alt="" />
                        <div className="layer">
                            <h3 className="project-headings">Ecom Website</h3>
                            <p>
                                I designed and developed a stunning clothing website using HTML, CSS, JavaScript, and
                                ReactJS that delivers a seamless shopping experience to customers, hosted on Netlify for
                                fast and reliable performance.
                            </p>
                            <a href="https://clothing-ecom-ankitkapoor.netlify.app/"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work5} alt="" />
                        <div className="layer">
                            <h3 className="project-headings"> Todo Application </h3>
                            <p>
                                Using Bootstrap, JavaScript, and ReactJS, I built a feature-rich todo application that
                                helps users stay organized and productive, deployed on Netlify for reliable and fast
                                performance.
                            </p>
                            <a href="https://todo-list-application-ankitkapoor.netlify.app/"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                    <div className="work">
                        <img src={work6} alt="" />
                        <div className="layer">
                            <h3 className="project-headings">PDF Merger Application</h3>
                            <p>
                                I created a hassle-free PDF merger using Bootstrap, Vanilla JavaScript, and Netlify that
                                enables users to effortlessly combine multiple PDF files into a single document with
                                just a few clicks.
                            </p>
                            <a href="https://pdf-merger-application.netlify.app/"><i
                                className="fa-solid fa-arrow-up-right-from-square"></i></a>
                        </div>
                    </div>
                </div>
                <a href="" className="btn">See more</a>
            </div>
        </div>
    );
}

export default PortfolioSection;