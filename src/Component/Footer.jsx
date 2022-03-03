import "./Footer.css"
import emailjs from '@emailjs/browser';
import { MdMarkEmailRead } from "react-icons/md";
import {AiOutlineLinkedin ,AiOutlineInstagram, AiOutlineYoutube, AiOutlineFacebook } from "react-icons/ai";


function Footer() {


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8prx22x', 'template_s8za0s5', e.target, 'user_wnMLtXgX3KInsT3lsrzeM')

          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();

      };
    return (
        <>
            <div className="main-footer">
                <div className="main-footer-img">

                    <div className="footer-one">
                        <div className="footer-one-first">
                            <div className="footer-one-first-box">
                                <div className="footer-one-first-box-logo-container"> </div>


                            </div>

                        </div>
                        <div className="footer-one-second">
                            Donec placerat, metus sed consectetur viverra, dolor nisl egestas ligula,
                            ac gravida turpis orci eget quam. Aliquam nulla nisi, accumsan id sapien varius, egestas vehicula di
                        </div>
                        <div className="footer-one-third">
                            <AiOutlineLinkedin className="footer-one-third-icon-one"></AiOutlineLinkedin>
                            <AiOutlineInstagram className="footer-one-third-icon-two"></AiOutlineInstagram>
                            <AiOutlineYoutube className="footer-one-third-icon-three"></AiOutlineYoutube>
                            <AiOutlineFacebook className="footer-one-third-icon-four"></AiOutlineFacebook>
                        </div>
                        <div className="footer-one-fourth"> | All rights reserved Copyrights 2022 |</div>

                    </div>
                    <div className="footer-two">
                        <div className="footer-two-contact">
                            <div className="footer-two-contact-heading">Contact Us &nbsp; <MdMarkEmailRead /> </div>
                            <form className="footer-contact-form" onSubmit={sendEmail}>
                                <div className="footer-contact-form-field-container">
                                    <input type="text" className="footer-contact-field" name="name" placeholder="Name" required />
                                </div>
                                <div className="footer-contact-form-field-container">
                                    <input type="email" className="footer-contact-field" name="email" placeholder="Email" required />
                                </div>
                                <div className="footer-contact-form-message-container">

                                    <textarea className="footer-contact-message" name="message" placeholder="Message" required></textarea>
                                </div>
                                <div className="footer-contact-form-button-container">
                                         <button typeof="submit" className="footer-contact-form-button">SEND</button>
                                </div>


                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer

