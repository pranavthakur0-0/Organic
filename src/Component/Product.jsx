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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                  Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem&nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                <div className="main-container-section-product-left-image-overlay-four"></div>
              </div>
              <div className="main-container-section-product-left-text">
                <div className="main-container-section-product-left-text-heading">
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem&nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                      <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
                Lorem &nbsp;
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
                        <li> Lorem ipsum dolor sit amet consectetu.</li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
                        </li>
                        <li>
                        Lorem ipsum dolor sit amet consectetu.
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
          Lorem ipsum dolor sit amet consectetu.
        </div>
      </div>

      <div className="product-container-circle"> </div>
    </>
  );
}
export default Product;
