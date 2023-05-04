import "./Contact.css"
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
                    Survey No.61/3/2-6, Plot No.40, Kothrud, Shantiban Co-Opp. Housing Society, Pune ,Pune,Maharashtra,India,411029
                    </div>
                </div>
                
                <div className="main-container-contact-number">
                    Phone
                    <div className="main-container-contact-address-number">
                        +91 2341341234
                        < br/>
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
                   
                </div>
            </div>


        </>
    )

}
export default Contact;