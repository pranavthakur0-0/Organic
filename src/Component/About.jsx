import '../Component/About.css'
import Ticker from './countup';
import { RiInstagramLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import AOS from 'aos';
import { FaLinkedinIn, FaFacebookF, FaSeedling } from "react-icons/fa";


function About()
{
    AOS.init({duration:1050});
    AOS.refresh();
    AOS.init({ once: true });
    
    return(
        <>
        <div className="about-main-container">
            <div className="about-turegenic-heading">
                About Truegenic
            </div>
        </div>

        <div className="about-container-main-two">
            <div className="about-container-box-one">
            <div className="about-container-box-one-part-text"> 
            <div className="about-container-box-one-part-text-space">About</div>
            <div className="about-container-box-one-part-text-heading" data-aos="fade-right" >Fun Facts About <br />Truegenic</div>
            <div className="about-container-box-one-part-text-heading-text" data-aos="fade-right">
            Established in 2018 as an agri-tech company with focus on Research and Development, plant breeding, seed production and processing, and maketing of hybrid vegetable seeds.
            </div>
            </div>
            <div className="about-container-box-one-part-image" data-aos="fade-left" > <div className="about-container-box-one-part-image-flex"></div> </div>
            </div>
        </div>

        <div className="about-team-space" />
        <div className="about-container-our-team">
            <div className="about-container-our-team-text-header">
                Our Team
            </div>
            
           <div className="about-our-team-head-container">


            <div className="about-our-team-head-container-one" >
                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="200">
                        <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                    <div className="about-container-profile-card-inner-pic-round-img-one"></div>
                                </div>
                            </div>
                            <div className="about-container-profile-card-inner-pic-text">
                                    <div className="profile-card-inner-name">
                                         
                                    BIRI SINGH
                                    </div>
                                    <div className="profile-card-inner-postion">
                                        Director
                                    </div>

                                    <div className="profile-card-inner-social-media">

                                    <FaFacebookF className='icon' />
                                    <RiInstagramLine className='icon' />
                                    <FaLinkedinIn className='icon' />

                                </div>
                                    
                            </div>
                        </div>
                    </div>


                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="300">
                    <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                <div className="about-container-profile-card-inner-pic-round-img-two"></div>
                                </div>
                            </div>
                            <div className="about-container-profile-card-inner-pic-text">
                                    <div className="profile-card-inner-name">
                                    DEVI DASS THAKUR  

                                    </div>
                                    <div className="profile-card-inner-postion">
                                        Director
                                    </div>

                                    <div className="profile-card-inner-social-media">
                                    <FaFacebookF className='icon' />
                                    <RiInstagramLine className='icon' />
                                    <FaLinkedinIn className='icon' />

                                </div>
                                    
                            </div>
                        </div>
                    </div>


                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="400">
                    <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                <div className="about-container-profile-card-inner-pic-round-img-three"></div>
                                </div>
                            </div>
                            <div className="about-container-profile-card-inner-pic-text">
                                    <div className="profile-card-inner-name-2">
                                        
                                            SUHAS SHARADCHANDRA BARGE
                                    </div>
                                    <div className="profile-card-inner-postion">
                                        Director
                                    </div>

                                    <div className="profile-card-inner-social-media">

                                    <FaFacebookF className='icon' />
                                    <RiInstagramLine className='icon' />
                                    <FaLinkedinIn className='icon' />

                                </div>
                                    
                            </div>
                        </div>
                    </div>


                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="500">
                    <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                <div className="about-container-profile-card-inner-pic-round-img-four"></div>
                                </div>
                            </div>
                            <div className="about-container-profile-card-inner-pic-text">
                                    <div className="profile-card-inner-name">
                                        Pranav Thakur
                                    </div>
                                    <div className="profile-card-inner-postion">
                                        Director
                                    </div>

                                    <div className="profile-card-inner-social-media">

                                    <FaFacebookF className='icon' />
                                    <RiInstagramLine className='icon' />
                                    <FaLinkedinIn className='icon' />

                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>


                <div className="about-backagound-team">TEAM</div>


           </div>
           </div>
        <div className="about-container-main-count">
<div className="about-container-main-count-one">
    <div className="about-container-main-count-one-number">   
<Ticker className="count" end={214} duration={3} ></Ticker>
<div className="about-countup-number-text-one">Our sales</div>
</div>
</div>


<div className="about-container-main-count-two">
    <div className="about-container-main-count-one-number">       
        <Ticker className="count" end={2142} duration={3} />
        <div className="about-countup-number-text-one">Our Employee</div>
    </div>
</div>


<div className="about-container-main-count-three">
    <div className="about-container-main-count-one-number">
        <Ticker className="count" end={21231} duration={3} />
             <div className="about-countup-number-text-one">sadfa
            </div>
    </div>
</div>


<div className="about-container-main-count-four">
    <div className="about-container-main-count-one-number">
        <Ticker className="count" end={21} duration={3} />
        <div className="about-countup-number-text-one">asdf</div>
        </div>
    </div>



</div>

<div className="about-team-space" />
        <div className="about-our-values">
            <div className="about-our-values-heading">
                Our Values
            </div>
            <div className="about-our-values-main-container">
                <div className="about-our-values-main-container-pic"></div>
                <div className="about-our-values-main-container-text">
                    <div className="about-our-values-main-container-text-heading" data-aos="fade-left">
                        Truegenic&nbsp;<MdVerified />
                    </div>
                    <div className="about-our-values-main-container-text-heading-text" data-aos="fade-left">
                         By offering exceptional research outputs, we hope to contribute to the success of our farmers and stakeholders.
                         <br /><br /><br />
                         We are always innovating and improving our production in order to give quality seed to farmers by keeping great genetic integrity and sprouting, as well as maintaining rigorous seed purity.
                         <br /><br /><br />
                         Our single goal is to boost farmer productivity and consequently national output by being a pioneer in seed production in the country and remaining a world-class source of quality seed of oil seeds, cereals, pulses, spice, and fibre crops.
                    </div>
                
                </div>
            </div>

        </div>

        <div className="about-main-container-our-mission-backgound-img">
        <div className="about-main-container-our-mission">
        <div className="about-container-our-mission">
        <div className="about-main-container-our-mission-heading">
            Our Mission <FaSeedling></FaSeedling>
        </div>
        <div className="about-main-container-our-mission-text-info">
        <div className="about-main-container-our-mission-text"data-aos="fade-left">
          <div className="ciricle-about">
              <div className="about-circle-round"><div className="about-circle-round-white" /></div>
              </div> 
              <div className='about-main-container-our-mission-text-write'>
              Develop vegetable varieties with innovative traits like higher yeild, better taste and quality.
              </div>
        </div>
        
        <div className="about-main-container-our-mission-text"data-aos="fade-left">
          <div className="ciricle-about">
              <div className="about-circle-round"><div className="about-circle-round-white" /></div>
              </div>
              <div className='about-main-container-our-mission-text-write'>
              Economize the requirement of chemicals
               through varietal development with inbuilt traits
               of disease.
              </div>
    

        </div>

        <div className="about-main-container-our-mission-text"data-aos="fade-left">
          <div className="ciricle-about">
              <div className="about-circle-round"><div className="about-circle-round-white" /></div>
              </div> 
              <div className='about-main-container-our-mission-text-write'>
              Develop varieties suited for varied agro climatic conditions.
              </div>
        </div>

        </div>
        </div>
        
        </div>
        </div>
        <div className="about-team-space" />

        </>
    )
    
}
export default About;