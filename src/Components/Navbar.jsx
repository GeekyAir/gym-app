import React from "react";
import { Stack } from "@mui/material";

import logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      px="20px"
      justifyContent="space-around"
      sx={{
        gap: { xs: "40px", sm: "123px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ height: "48px", width: "48px", margin: "0 20px" }}
      />
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/home"
          style={{
            color: "#3a1212",
            textDecoration: "none",
            borderBottom: "3px solid #ff2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercise"
          style={{ color: "#3a1212", textDecoration: "none" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
