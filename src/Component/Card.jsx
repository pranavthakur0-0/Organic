import React from "react";
import "../Component/Carousel.css"
import Item from "../Component/Item"
import ReactElasticCarousel from "react-elastic-carousel";

function Card() {
    const carouselRef = React.useRef(null);
    const onNextStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(0);
      }
    };
    const onPrevStart = (currentItem, nextItem) => {
      if (currentItem.index === nextItem.index) {
        carouselRef.current.goTo(4);
      }
    };



    return (
        <>
        <ReactElasticCarousel 
        
  ref={carouselRef}
  enableAutoPlay
  autoPlaySpeed={10000}
  onPrevStart={onPrevStart}
  onNextStart={onNextStart}
  disableArrowsOnEnd={false} >
      
                     <Item number={1}></Item>
                     <Item number={2}></Item>
                     <Item number={3}></Item>
                     <Item number={4}></Item>
        </ReactElasticCarousel>
        </>
    )
}

export default Card;