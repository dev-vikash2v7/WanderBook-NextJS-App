import React from "react";
import ImageSlider from "react-simple-image-slider";
import Link from "next/link";
import { Box, Button, Image, Text } from "@chakra-ui/react";

export const Slideshow = ({ image, no, tag, subTag }) => {
  return (
    <Box
      className="slide-container"

      // border={{ base:"8px solid red", sm:'5px solid green', md: '3px solid teal', lg: '2px solid black' , xl:'3px solid red' , '2xl':'4px solid grey' }}
      // display={{ base:"block" , sm:"block" , md:"flex" , lg:"flex" , xl : "flex" , '2xl' : "flex"}}
    >
      <Box
        textAlign={"start"}
        width={"88%"}
        margin={"auto"}
        marginBottom={"20px"}
        // border="2px solid orange"
      >
        <Text
          fontWeight={"bold"}
          fontSize={["12px", "15px", "18px", "22px"]}
          marginBottom={"8px"}
          marginTop={"15px"}
          marginLeft="10px"
        >
          {tag}
        </Text>
        <p style={{ marginBottom: "8px" ,marginLeft:"10px" }} >{subTag}</p>
        <Box display="flex" flexWrap="wrap" gap="10px">
          {image.slice(0, no).map((slideImage, index) => (
            <Link
              style={{ textDecoration: "none" }}
              href={`/property?city=${slideImage.caption}`}
              key={index}
            >
              <Box
                className="each-slide"
                key={index}
                margin="0px 10px 0px 10px"
                width="200px"
              >
                <Box
                  height="auto"
                >
                  <img src={slideImage.url} alt="v" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                  <Box
                    display={{
                      base: "none",
                      sm: "none",
                      md: "block",
                      lg: "block",
                      xl: "block",
                      "2xl": "block",
                    }}
                  >
                    <h3 style={{ fontWeight: "bold" }}>{slideImage.caption}</h3>
                    <h3 style={{ fontWeight: "400" }}>{slideImage.property}</h3>
                  </Box>
                  <Box
                    display={{
                      base: "block",
                      sm: "block",
                      md: "none",
                      lg: "none",
                      xl: "none",
                      "2xl": "none",
                    }}
                  >
                    <h3
                      style={{ fontWeight: "thin" }}
                      fontSize={{ base: "2px", sm: "10px" }}
                    >
                      {slideImage.caption}
                    </h3>
                  </Box>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
