import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "../HorizontalScrollBar";
import Loader from "../Loader";

const SimilarVideos = ({ targetMuscleExercise, equipment }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h3" mb={5}>
        Similar{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercise.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Similar{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipment.length ? (
          <HorizontalScrollBar data={targetMuscleExercise} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarVideos;
