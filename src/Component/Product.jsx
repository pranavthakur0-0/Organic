import "./Product.css";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { GoQuote } from "react-icons/go";
import AOS from "aos";
function Product() {
  AOS.init({ duration: 1050 });
  AOS.refresh();
  AOS.init({ once: true });

  return (
    <>
      <div className="main-container-product">
        <div className="main-container-product-page-heading">Our Products</div>
      </div>

      <div className="main-container-section-product">
        <div className="main-container-section-product-star">
          Our Star Products
        </div>

        <hr />

        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-one"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                Kanika  &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Highly resistant to YVMV & OLCV.
                        </li>
                        <li>Very good average fruit weight.</li>
                        <li>
                        Good for all season cultivation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-one"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                  Divya &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Highly resistant to YVMV & OLCV.
                        </li>
                      <li>Very good average fruit weight.</li>
                        <li>
                        Good for all season cultivation.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <hr />




        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-two"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                  Rockstar &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          High yield potential & long duration (4-6 months).
                        </li>
                        <li>Wide adaptability.</li>
                        <li>
                          Good keeping quality and suitable for long distance
                          shipping.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-two"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                  Tomboy &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          High yield potential & long duration (4-6 months).
                        </li>
                        <li>Wide adaptability.</li>
                        <li>
                        Round, medium size (100 – 120 g).
                        </li>
                        <li>
                          Good keeping quality and suitable for long distance
                          shipping.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <hr />
        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-three"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                  Rafale &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Good tolerance to TYLCV.
                        </li>
                        <li>Good heat tolerant with good fruit setting in summer.</li>
                        <li>
                        High yield potential. 
                        </li>
                        <li>
                        Good keeping quality and suitable for long distance shipping.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-three"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                  Hilton &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          High yield potential with short internodes.
                        </li>
                        <li>Good keeping quality and suitable for long distance shipping. </li>
                        <li>
                        Suitable for open and net house cultivation.
                        </li>
                        <li>Suitable for open and net house cultivation.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <hr />
        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-four"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                  Madhubala &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Early in maturity.
                        </li>
                        <li>Very high in yield.</li>
                        <li>
                        Excellent pod quality with better shelf life.
                        </li>
                        <li>
                        Suitable for long distance shipping.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-four"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                  Niagara &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Excellent fruit setting & vigor.
                        </li>
                        <li>Fruit harvesting starts 40 days after sowing.</li>
                        <li>
                        Good tolerance to disease.
                        </li>
                        <li>
                        Shiny uniform fruits.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <hr />
        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-five"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                  Mannat &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Excellent fruit setting & vigor.
                        </li>
                        <li>Light Green, Length 20 – 22 cm & weight 200 – 250 gm.</li>
                        <li>Shiny uniform fruits.</li>
                        <li>
                          Good tolerance to disease.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-five"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                  Bharti &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Good tolerance to Virus & heat.
                        </li>
                        <li>High yield potential.</li>
                        <li>
                        Achari type for Green purpose.
                        </li>
                        <li>
                        Good keeping quality and suitable for long distance shipping. 
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <hr />
        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-six"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                  Sania &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Excellent fruit setting & vigor.
                        </li>
                        <li>Suitable for dual purpose Green & Red (dry) with excellent bearing.</li>
                        <li>Good keeping quality and suitable for long distance shipping. </li>
                        <li>
                        High yield potential.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-six"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                Punjab Sunehri &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Highly resistant to Virus, fruit rot & knot nematodes.
                        </li>
                        <li>High yield potential & good heat tolerance with excellent fruit setting in Summer. 
                        </li>
                        <li>
                        Suitable for dual purpose Green & Red (dry).
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>








        <hr />

        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-seven"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                Jackpot &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Prolific fruit set & good yield. 
                        </li>
                        <li>Sweet taste, TSS 12 – 13 % sugar content.</li>
                        <li>Very small seed.</li>
                        <li>
                          Excellent keeping quality and suitable for long distance shipping.

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-seven"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                  Henry &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          High yielding hybrid has good fruit setting ability.
                        </li>
                        <li>Very good adaptability.</li>
                        <li>
                        Sweet taste, TSS 12% sugar content.
                        </li>
                        <li>
                        Good keeping quality and suitable for long distance shipping.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <hr />




        <div className="main-container-section-product-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-left-cover-backgound">
            <div className="main-container-section-product-left-cover">
              <div className="main-container-section-product-left-image">
                <div className="main-container-section-product-left-image-overlay-eight"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                Rambo &nbsp;
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />
                  <FaStar className="FaStar" />{" "}
                  <FaStarHalf className="halfFaStar" />
                </div>
                <div className="main-container-section-product-left-text-content">
                  <div className="main-container-section-product-left-text-content-plant">

                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Prolific fruit set & good yield. 
                        </li>
                        <li>High TSS 14 % sugar content, very sweet.</li>
                        <li>Very small seed.</li>
                        <li>
                          Excellent keeping quality and suitable for long distance shipping.

                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div
          className="main-container-section-product-right"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="main-container-section-product-right-cover-backgound">
            <div className="main-container-section-product-right-cover">
              <div className="main-container-section-product-right-image">
                <div className="main-container-section-product-right-image-overlay-eight"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-right-text-heading">
                 Nova &nbsp;
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />
                  <FaStar className="FaStar-right" />{" "}
                  <FaStarHalf className="halfFaStar-right" />
                </div>
                <div className="main-container-section-product-right-text-content">
                  <div className="main-container-section-product-left-text-content-plant">
                    <br></br>
                    <h1 className="main-container-section-product-left-text-content-plant-heading">
                      Features:
                    </h1>
                    <div className="main-container-section-product-left-text-content-plant-text">
                      <ul>
                        <li>
                          {" "}
                          Average curd weight 700 gm – 950 gm.  
                        </li>
                        <li> Curd harvesting starts 55 - 60 days after transplanting.</li>
                        <li>
                        Sweet taste, TSS 12% sugar content.
                        </li>
                        <li>
                        Moderate to good Xcc tolerance.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <hr />

      </div>
      <div className="product-container-gallary">
        <div className="product-container-gallary-sign">
          <GoQuote className="GoQuote-icon" />
        </div>
        <div className="product-container-gallary-text">
          Partner in your Prosperity
        </div>
      </div>

      <div className="product-container-circle"> </div>
    </>
  );
}
export default Product;
