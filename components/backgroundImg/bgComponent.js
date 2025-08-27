import { Box, Container, Heading, Text } from "@chakra-ui/react";
import styles from "../backgroundImg/bgComponent.module.css";
function BgComponent({ heading, subHeading }) {
  return (
    <>
      <Box
        // border="2px solid black"
        w="100%"
        color="white"
        height={{ md: "400px", sm: "300px" }}
      >
        <Box className={styles.bgImg} width="100%" height="100%">
          <Box
            // border="2px solid red"
            w="90%"
            margin="auto"
            p={4}
          >
            <Box className={styles.textOnImg}>
              <Text
                fontSize={{ base: "28px", md: "44px", lg: "60px" }}
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
                color="white"
                letterSpacing="tight"
              >
                {heading}
              </Text>
              <br />

              <Text
                fontSize={{ base: "20px", md: "28px", lg: "32px" }}
                textShadow="2px 2px 4px rgba(0, 0, 0, 0.8)"
                color="accent.200"
                fontWeight="medium"
              >
                {subHeading}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BgComponent;
