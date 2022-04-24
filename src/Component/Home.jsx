import Card from './Card';
import './Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {

    AOS.init({duration:1050});
    AOS.refresh();
    AOS.init({ once: true });

    return (
        <>
            <div className='main-home-display'>
                <div className='home-display-one'>
                    <div className="home-left-one" data-aos="fade-up"  data-aos-duration="1000">
                        <span>Partner in your<br /> Prosperity</span>
                    </div>
                    <div className="home-left-two" data-aos="fade-up"  data-aos-duration="1000">
                        <span>
                        The core of the seed is all of Earth's past evolution, human historical evolution, and the possibility for future evolution.
                         Because culture developed the seed via deliberate selection—women chose the greatest and most diverse—the seed is the essence of culture. 
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
            <div className='home-about-text'data-aos="zoom-out" data-aos-duration="1700">Few Words About<br /> Truegenic</div>


            <div className='section-info'>
                <div className='section-info-one'></div>
                <div className='section-info-two'>
                    <div className="section-info-two-partone" data-aos="fade-right">
                        Special Support & Caring Organic Turegenic seeds
                    </div>
                    <div className="section-info-two-parttwo" data-aos="fade-right" data-aos-delay="200">
                    We all know that we can't plant a seed with our fists closed. We must extend our hands to plant." Seed planting is a movement that is rising in popularity by the day, but it is a joy that cannot be forgotten once experienced.
                    </div>
                    <div className="section-info-two-partthree" data-aos="fade-right" data-aos-delay="200">
                        <div className="partthree-logo-text">
                            <div className="logo">
                            </div>
                            <div className="text">
                                <div className="text-heading">Natural Process</div>
                                <div className="text-text">Every seed is produced naturally then sent to customers.</div>
                            </div>
                        </div>
                    </div>


                    <div className="section-info-two-partfour" data-aos="fade-right" data-aos-delay="200">
                        <div className="partthree-logo-text">
                            <div className="logo">
                            </div>
                            <div className="text">
                                <div className="text-heading">100% Organic Products</div>
                                <div className="text-text">Truegenic offers 100% organically grown seeds.</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-info-two-partfive" data-aos="fade-right" data-aos-delay="200" >
                        <div className="partthree-logo-text">
                            <div className="logo">
                            </div>
                            <div className="text">
                                <div className="text-heading">Homegrown Goodness</div>
                                <div className="text-text">At Truegenic, we carefully cultivate each seed using organic methods.</div>
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
                            Seed Care
                        </div>
                        <div className="section-info-text">
                            Aenean eleifend rhoncus nisi, vel
                            tincidunt eros euismod. Donec dignissim
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
                            Seed Care
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
                            Seed Care
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
                        Truegenic
                    </div>
                    <div className="farming-text"  data-aos="fade-left" id='parent-animation'>
                        Seeds
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
                                <img src='https://farmino.elipso.site/wp-content/uploads/sites/8/2020/07/lettuce.png ' alt='new'></img>
                            </span>
                        </div>
                        <div className='text'>
                            <div className='heading'>
                                Natural Food
                            </div>
                            <div className="text">
                            Truegenic produces organically grown seeds.

                            </div>
                        </div>
                    </div>


                    <div className="section-home-one-second">
                        <div className='logo'>
                            <span><img src='https://farmino.elipso.site/wp-content/uploads/sites/8/2020/07/greenhouse.png' alt='new'></img></span>
                        </div>
                        <div className='text'>
                            <div className='heading'>
                                Biological Safe
                            </div>
                            <div className="text">
                            Truegenic's seeds are biologically safe.
                            </div>
                        </div>
                    </div>


                    <div className="section-home-one-third">
                        <div className='logo'>
                            <span><img src='https://farmino.elipso.site/wp-content/uploads/sites/8/2020/07/nutrition.png' alt='new'></img></span>
                        </div>
                        <div className='text'>
                            <div className='heading'>
                                Improve Health
                            </div>
                            <div className="text">
                            Truegenic offers fresh and nutritious seeds.

                            </div>
                        </div>


                    </div>

                </div>
                <div className="section-home-main-container-why-us-text">
                We have something unique to offer at Truegenic Seed. Every member of our staff is working together towards goal into becoming India's most reputable seed company. We are looking forward to seeing you! 
                </div>

            </div>
            <div className="home-main-container-main-testimonial">
                <div className="home-main-container-main-our-testimonial">
                    Our Testimonials
                </div>
                <div className="home-main-container-main-testimonial-heading" >
                    Our Happy Clients Say
                </div>

                <div className="home-main-container-main-testimonial-carousel">
                    <Card>
                    </Card>
                </div>


            </div>



        </>

    )

}
export default Home;
//<img className='heart-vegetables' src="https://farmino.elipso.site/wp-content/uploads/sites/8/2020/07/2418583.png"alt="new"/>