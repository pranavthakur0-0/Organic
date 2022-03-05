import '../Component/About.css'
import Ticker from './countup';
import { RiInstagramLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";

import { FaLinkedinIn, FaFacebookF, FaSeedling } from "react-icons/fa";


function About()
{
    
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In accusamus 
                at repellendus architecto! Earum quas harum deserunt fuga? Eos amet iusto asperiores ducimus
                 vitae cum quam autem non recusandae accusantium.
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
                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="100">
                        <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                    <div className="about-container-profile-card-inner-pic-round-img-one"></div>
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


                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="200">
                    <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                <div className="about-container-profile-card-inner-pic-round-img-two"></div>
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


                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="300">
                    <div className="about-container-profile-card-inner">
                            <div className="about-container-profile-card-inner-pic">
                                <div className="about-container-profile-card-inner-pic-round">
                                <div className="about-container-profile-card-inner-pic-round-img-three"></div>
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


                    <div className="about-container-profile-card-temp" data-aos="fade-up" data-aos-delay="400">
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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
                         maiores pariatur quia, corporis ducimus obcaecati repellat vel eaque, 
                         fugit error sit totam magnam
                         molestias harum quo doloribus iste maxime quibusdam?
                         <br /><br /><br />
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
                         maiores pariatur quia, corporis ducimus obcaecati repellat vel eaque, 
                         fugit error sit totam magnam.
                         <br /><br /><br />
                         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia inventore aut 
                         error molestias officiis a dolor fugiat odio, quos ipsa sit praesentium harum quia 
                         earum est temporibus cupiditate, rem deserunt.
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
              </div>  Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Sunt, provident reiciendis.
              Dolorem fuga nemo odio itaque sed fugit, corporis, autem sit nihil quis ratione, architecto hic commodi aperiam necessitatibus quia?
        </div>
        <div className="about-main-container-our-mission-text"data-aos="fade-left">
        <div className="ciricle-about">
              <div className="about-circle-round"><div className="about-circle-round-white" /></div>
              </div> 
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Sunt, provident reiciendis.
              Dolorem fuga nemo odio itaque sed fugit, corporis, autem sit nihil quis ratione, architecto hic commodi aperiam necessitatibus quia?
        </div>
        <div className="about-main-container-our-mission-text"data-aos="fade-left">
        <div className="ciricle-about">
              <div className="about-circle-round">
              <div className="about-circle-round-white" />
              </div>
              </div> 
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Sunt, provident reiciendis.
              Dolorem fuga nemo odio itaque sed fugit, corporis, autem sit nihil quis ratione, architecto hic commodi aperiam necessitatibus quia?
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