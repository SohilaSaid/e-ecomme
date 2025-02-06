
import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/slider-image-1.jpeg"
import img2 from "../../assets/images/slider-image-2.jpeg"
import img3 from "../../assets/images/slider-image-3.jpeg"

export default function Slider1() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true
    };
    return (
        <div className="flex">
            <div className="w-9/12">
                <div className="slider-container">
                    <Slider {...settings} autoplay >
                        <div>
                            <img src={img1} alt="" className="w-full h-96  object-cover"></img>
                        </div>
                        <div>
                            <img src={img2} alt="" className="w-full h-96 object-cover"></img>
                        </div>
                        <div>
                            <img src={img3} alt="" className="w-full h-96 object-cover"></img>
                        </div>

                    </Slider>
                </div>
            </div>
            <div className="w-3/12">
            <div>
                <img src={img1} className=" w-full h-48 object-cover" alt=""></img>
                <img src={img2} className="w-full h-48 object-cover" alt=""></img>
            </div>
            </div>
        </div>
    );
}



