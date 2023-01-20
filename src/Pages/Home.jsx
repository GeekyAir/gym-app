import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercise from "../Components/HomeComponents/Exercise";
import HeroBanner from "../Components/HomeComponents/HeroBanner";
import SearchExercise from "../Components/HomeComponents/SearchExercise";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercise
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
