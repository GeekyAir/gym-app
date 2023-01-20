import { Button, Stack, Typography } from "@mui/material";

import EquipmentIcon from "../../assets/icons/equipment.png";
import TargetIcon from "../../assets/icons/target.png";
import BodyPartIcon from "../../assets/icons/body-part.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartIcon,
      name: bodyPart,
    },
    {
      icon: TargetIcon,
      name: target,
    },
    {
      icon: EquipmentIcon,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} className="detail-image" loading="lazy" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {` `}
          bup is one of the best exercises to target your {target}. It will help
          you improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} alignItems="center" direction="row" gap="24px">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
