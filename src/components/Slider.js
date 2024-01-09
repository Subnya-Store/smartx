import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "images/1.jpg",
    caption: "Slide 1",
  }, 
  {
    url: "images/new4.jpg",
    caption: "Slide 4",
  },
  {
    url: "images/new3.jpg",
    caption: "Slide 3",
  },

  {
    url: "images/new2.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/new5.jpg",
    caption: "Slide 5",
  },
  {
    url: "images/new1.jpg",
    caption: "Slide 6",
  }
];

const properties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
};

export default function Slider() {
  return (
    <div className="slide-container indicatorss ">
      <Slide duration={2000} easing="cubic-in" indicators={true} arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide sm:hello lg:hellow" key={index}>
            <div
              className="bg-[length:100%_175px] sm:bg-[length:100%_100%]"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="h-[175px] sm:h-[420px]"></div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
