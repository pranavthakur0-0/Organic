import "./Contact.css"
import Map from "./Map";
import AOS from 'aos';
function Contact() {

    AOS.init({duration:1050});
    AOS.refresh();
    AOS.init({ once: true });
    
    return (
        <>
            <div className="main-contact-container">
                <div className="contact-container-heading">
                    Contact Us
                </div>
            </div>

            <div className="main-container-contact">
                <div className="main-container-contact-space" />
                <div className="main-container-contact-stay-connect">Stay Connect</div>
                <div className="main-container-contact-heading">
                    Get In Touch
                </div>
            </div>

            <div className="main-container-contact-main-address-box">
                <div className="main-container-contact-main-address-box-contain">
                <div className="main-container-contact-address">
                    Address
                    <div className="main-container-contact-address-text">
                        Vivamus congue mi et
                        nunc vehicula Street , 58
                    </div>
                </div>
                
                <div className="main-container-contact-number">
                    Phone
                    <div className="main-container-contact-address-number">
                        +91 2341341234
                        +91 2341341234
                    </div>
                </div>

                <div className="main-container-contact-email">
                    Email
                    <div className="main-container-contact-address-email">
                        Vivamus congue mi et
                        nunc vehicula Street , 58
                    </div>
                </div>
                </div>
                <div className="main-container-contact-main-address-box-email">
                    <Map />
                </div>
            </div>


        </>
    )

}
export default Contact;