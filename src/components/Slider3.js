import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "images/p1.png",
    caption: "Slide 1",
  },
  {
    url: "images/p2.png",
    caption: "Slide 2",
  },
  {
    url: "images/p3.png",
    caption: "Slide 3",
  },
  {
    url: "images/p4.png",
    caption: "Slide 4",
  },
  {
    url: "images/p5.png",
    caption: "Slide 5",
  },
  {
    url: "images/smart.png",
    caption: "Slide 6",
  },
];

export default function Slider3() {
  return (
    <div className="rounded-[20px] sm:rounded-[33px] overflow-hidden shadow-2xl sm:shadow-primary slide-container indicatorss w-[100%] sm:w-[49%] mb-4 ">
      <Slide  duration={5000} easing="cubic-in" indicators={true} arrows={false}>
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
