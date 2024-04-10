// import { Container, Vstack } from '@chakra-ui/react';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Acc from "./DispAccessories";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const settings = {
  className: "center",
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding: "60px",
  slidesToShow: 3,
  swipeToSlide: true,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],

  afterChange: function (index) {
    // console.log(
    //   `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    // );
  },
};
export default function ProductCarousel() {
  return (
    <>
      <Slider {...settings}>
        {Acc.map((accessories) => (
          <div key={accessories.name}>
            <div className="lisa">
              <Link to="/accessory">
                <img src={accessories.imgURL} alt={accessories.name} />
                <Box className="overlay2">
                  <Heading
                    color="#fff"
                    mb="-4"
                    fontSize={["19", "19", "20", "20", "25"]}
                  >
                    {accessories.name}
                  </Heading>
                  <Text color="#666" fontWeight={"500"}>
                    {accessories.category}
                  </Text>
                </Box>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
