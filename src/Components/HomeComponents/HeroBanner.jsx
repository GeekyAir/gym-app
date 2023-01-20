import React from "react";
import { Box, Button, Typography } from "@mui/material";

import heroBanner from "../../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      p="20px"
      position="relative"
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography fontWeight={600} fontSize="26px" color="#ff2625">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat,Sweet
        <br />
        And Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
      >
        Explore Exercise
      </Button>
      <Typography
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
        fontWeight={600}
      >
        Exercise
      </Typography>
      <img src={heroBanner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
