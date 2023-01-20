import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../Components/ExerciseComponents/Detail";
import ExerciseVideos from "../Components/ExerciseComponents/ExerciseVideos";
import SimilarVideos from "../Components/ExerciseComponents/SimilarVideos";
import {
  exercisesOptions,
  fetchData,
  YouTubeOptions,
} from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const ExerciseDeTailURL = "https://exercisedb.p.rapidapi.com";
      const YouTubeSearchURL =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${ExerciseDeTailURL}/exercises/exercise/${id}`,
        exercisesOptions
      );
      setExerciseDetail(exerciseDetailData);
      const exerciseVideoData = await fetchData(
        `${YouTubeSearchURL}/search?query=${exerciseDetailData.name} exercise`,
        YouTubeOptions
      );
      setExercisesVideos(exerciseVideoData.contents);
      const targetMuscleExerciseData = await fetchData(
        `${ExerciseDeTailURL}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      setTargetMuscleExercise(targetMuscleExerciseData);
      const equipmentExerciseData = await fetchData(
        `${ExerciseDeTailURL}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      setEquipment(equipmentExerciseData);
    };
    fetchExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exercisesVideos={exercisesVideos}
        name={exerciseDetail.name}
      />
      <SimilarVideos
        targetMuscleExercise={targetMuscleExercise}
        equipment={equipment}
      />
    </Box>
  );
};

export default ExerciseDetail;
