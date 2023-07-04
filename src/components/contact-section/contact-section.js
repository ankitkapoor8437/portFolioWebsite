import React from "react";
import '../contact-section/contact-section.css';

const ContactSection = () => {
    return (

        // <!-- CONTACT SECTION -->

        <div id="contact">
            <div className="container">
                <div className="row">
                    {/* <!-- left --> */}
                    <div className="contact-left">
                        <h1 className="subTitle">
                            Contact Me
                        </h1>
                        <p><i className="fa-solid fa-paper-plane"></i>ankitkapoor8437@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i>8437926804</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/ankit-kapoor-a72bb7152/"><i
                                className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/itsallaboutkapoor/"><i
                                className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://github.com/ankitkapoor8437"><i className="fa-brands fa-square-github"></i></a>
                            <a href="https://twitter.com/itsallabtKapoor"><i
                                className="fa-brands fa-square-twitter"></i></a>
                        </div>
                        <a href="images/ANKITKAPOOR_UPDATED_CV.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    {/* <!-- right --> */}
                    <div className="contact-right">
                        <form name='submit-to-google-sheet'>
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" id="" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;