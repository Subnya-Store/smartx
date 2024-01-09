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

export default function SliderDB() {
  return (
   <div className="shadow-2xl">
   <div className="slide-container indicatorss ">
      <Slide duration={2000} easing="cubic-in" indicators={false} arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide sm:hello lg:hellow" key={index}>
            <div
              className="bg-[length:100%_145px] sm:bg-[length:100%_100%]"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <div className="h-[145px] sm:h-[350px]"></div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
    </div>
  );
}
