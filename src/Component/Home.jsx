
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import lattice from "./images/lettuce.png"
import nutrition from "./images/nutrition.png"
import greenhouse from "./images/greenhouse.png"

function Home() {

    const [move, setmove] = useState(0)

    AOS.init({duration:1050});
    AOS.refresh();
    AOS.init({ once: true });

    function moveSlider(direction) {
        if (direction === "left" && move >= 1) {
          setmove(move - 1);
        } else if (direction === "right" && move < 2) {
          setmove(move + 1);
        }
      }
      
      useEffect(() => {
        const carouselWrapper = document.querySelector(".outer_carousel-wrapper");
        if (carouselWrapper) {
          carouselWrapper.style.transform = `translateX(-${move * carouselWrapper.getBoundingClientRect().width}px)`;
        }
      }, [move]);
      

    return (
        <>
            <div className='main-home-display'>
                <div className='home-display-one'>
                    <div className="home-left-one" data-aos="fade-up"  data-aos-duration="1000">
                        <span>Lorem Ipsum<br /> dolor sit</span>
                    </div>
                    <div className="home-left-two" data-aos="fade-up"  data-aos-duration="1000">
                        <span>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam illo modi nam omnis necessitatibus esse, laborum voluptatibus in. Ex, cum accusamus dicta enim libero minima aperiam dolor nobis. Facere, est!
                        </span>
                    </div>
                </div>
                <div className='home-display-two'>
                    <div className="home-heart-vegetables">
                    </div></div>
            </div>
            <br />
            <br />
                <div className="home-about-main">
            <div className='home-about'>Who We Are</div>
            <div className='home-about-text'data-aos="zoom-out" data-aos-duration="1700">Sit, amet consectet<br /> LoremIpsum</div>


            <div className='section-info'>
                <div className='section-info-one'></div>
                <div className='section-info-two'>
                    <div className="section-info-two-partone" data-aos="fade-right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div className="section-info-two-parttwo" data-aos="fade-right" data-aos-delay="200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptas quasi soluta illo rerum rem, voluptates deserunt fuga mollitia dignissimos distinctio.
                    </div>
                    <div className="section-info-two-partthree" data-aos="fade-right" data-aos-delay="200">
                        <div className="partthree-logo-text">
                            <div className="logo">
                            </div>
                            <div className="text">
                                <div className="text-heading">
                                    Lorem ipsumd?
                                    </div>
                                <div className="text-text">Every seed is produced naturally then sent to customers.</div>
                            </div>
                        </div>
                    </div>


                    <div className="section-info-two-partfour" data-aos="fade-right" data-aos-delay="200">
                        <div className="partthree-logo-text">
                            <div className="logo">
                            </div>
                            <div className="text">
                                <div className="text-heading">Lorem ipsumd?</div>
                                <div className="text-text">Lorem ipsum dolor sit amet consectetur adipisicing elit..</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-info-two-partfive" data-aos="fade-right" data-aos-delay="200" >
                        <div className="partthree-logo-text">
                            <div className="logo">
                            </div>
                            <div className="text">
                                <div className="text-heading">Lorem ipsumd?</div>
                                <div className="text-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div className='section-info-three' data-aos="fade-up"  data-aos-delay="300">
                    <div className='section-info-card'>
                        <div className="section-card">
                            <div className="section-card-logo">
                                <div className="section-card-logo-circle"></div>
                            </div>
                        </div>
                        <div className="section-info-heading">
                            Lorem
                        </div>
                        <div className="section-info-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>

                    </div>
                </div>
                <div className='section-info-four' data-aos="fade-up" data-aos-delay="600">
                    <div className='section-info-card2'>
                        <div className="section-card2">
                            <div className="section-card-logo2">
                                <div className="section-card-logo-circle2"></div>
                            </div>
                        </div>
                        <div className="section-info-heading2">
                            Lorem
                        </div>
                        <div className="section-info-text3">
                            Aenean eleifend rhoncus nisi, vel
                            tincidunt eros euismod. Donec dignissim
                        </div>

                    </div>
                </div>
                <div className='section-info-four' data-aos="fade-up" data-aos-delay="900">
                    <div className='section-info-card3'>
                        <div className="section-card2">
                            <div className="section-card-logo3">
                                <div className="section-card-logo-circle3"></div>
                            </div>
                        </div>
                        <div className="section-info-heading3">
                           Lorem
                        </div>
                        <div className="section-info-text3">
                            Aenean eleifend rhoncus nisi, vel
                            tincidunt eros euismod. Donec dignissim
                        </div>

                    </div>
                </div>

            </div>

            </div>


            <div className="transparent-backgound-organic">
                <div className="organic-farming">
                    <div data-aos-anchor="#parent-animation"  className="organic-text" data-aos="fade-right">
                        Organic
                    </div>
                    <div className="farming-text"  data-aos="fade-left" id='parent-animation'>
                        Farming
                    </div>
                </div>
            </div>



            <div className="section-home-main-container-why-us">
                <div className="section-home-main-container-why-us-space"></div>
                <div className="section-home-main-container-why-us-heading">
                    Why choose us
                </div>

                <div className='section-home-element' data-aos="fade-up">
                    <div className="section-home-one-first">
                        <div className='logo'>
                            <span>
                                <img src={lattice} alt='new'></img>
                            </span>
                        </div>
                        <div className='text'>
                            <div className='heading'>
                                Natural Food
                            </div>
                            <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.

                            </div>
                        </div>
                    </div>


                    <div className="section-home-one-second">
                        <div className='logo'>
                            <span><img src={greenhouse} alt='new'></img></span>
                        </div>
                        <div className='text'>
                            <div className='heading'>
                                Biological Safe
                            </div>
                            <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                        </div>
                    </div>


                    <div className="section-home-one-third">
                        <div className='logo'>
                            <span><img src={nutrition} alt='new'></img></span>
                        </div>
                        <div className='text'>
                            <div className='heading'>
                                Improve Health
                            </div>
                            <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.

                            </div>
                        </div>


                    </div>

                </div>
                <div className="section-home-main-container-why-us-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, odit corporis sit, molestias fuga consectetur veritatis cum deserunt, inventore itaque fugiat ipsam saepe nam enim magni eum reprehenderit ratione numquam!
                </div>

            </div>
            <div className="home-main-container-main-testimonial">
                <div className="home-main-container-main-our-testimonial"  data-aos="fade-up">
                    Our Testimonials
                </div>
                <div className="home-main-container-main-testimonial-heading"  data-aos="fade-up">
                    Our Happy Clients Say
                </div>

                <div className="home-main-container-main-testimonial-carousel"  data-aos="fade-up">
                <div className="home-container-carousel-wrapper">
                    <div className="outer_carousel-wrapper">
                        <div className="slide_one slide_wrap">
                            <div className="img" style={{backgroundImage : `url(https://images.unsplash.com/photo-1545830790-68595959c491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`}}></div>
                            <div className="text">
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae, id sit cumque dolore inventore atque molestiae eius ipsa, eum in asperiores culpa consequatur sunt quis quaerat pariatur, aut assumenda?</p>
                            </div>
                        </div>
                        <div className="slide_two slide_wrap">
                        <div className="img" style={{backgroundImage : `url(https://plus.unsplash.com/premium_photo-1661774644841-d1a04da3c4d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`}}></div>
                            <div className="text">
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae, id sit cumque dolore inventore atque molestiae eius ipsa, eum in asperiores culpa consequatur sunt quis quaerat pariatur, aut assumenda?</p>
                            </div>
                        </div>
                        <div className="slide_three slide_wrap">
                        <div className="img" style={{backgroundImage : `url(https://images.unsplash.com/photo-1537721664796-76f77222a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)`}}></div>
                            <div className="text">
                                <h3>Lorem Ipsum</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque vitae, id sit cumque dolore inventore atque molestiae eius ipsa, eum in asperiores culpa consequatur sunt quis quaerat pariatur, aut assumenda?</p>
                            </div>
                        </div>
                    </div>
                    <button className='slider_button slide_btn_left' onClick={e=>moveSlider('left')}><IoIosArrowBack /></button>
                    <button className='slider_button slide_btn_right' onClick={e=>moveSlider('right')}><IoIosArrowForward /></button>
                </div>
                </div>
            </div>

        </>

    )

}
export default Home;
//<img className='heart-vegetables' src="https://farmino.elipso.site/wp-content/uploads/sites/8/2020/07/2418583.png"alt="new"/>