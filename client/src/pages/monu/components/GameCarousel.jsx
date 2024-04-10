// import { Container, Vstack } from '@chakra-ui/react';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Games from "../../../components/DispGames";
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
        {Games.map((game) => (
          <div key={game.name}>
            <div className="lisa">
              <Link to="/products">
                <img src={game.imgURL} alt={game.name} />
                <Box className="overlay2">
                  <Heading
                    color="#fff"
                    mb="-4"
                    fontSize={["19", "19", "20", "20", "25"]}
                  >
                    {game.name}
                  </Heading>
                  <Text color="#666" fontWeight={"500"}>
                    {game.category}
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
