import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { PRIMARY_GRADIENT } from "../../theme/muiThemes";

const HEIGHT = 8;

const CustomSlider = styled(Slider)(({ theme }) => ({
  height: HEIGHT,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: theme.palette.background.default,
    border: "5px solid currentColor",
  },
  "& .MuiSlider-track": {
    height: HEIGHT,
    backgroundImage: PRIMARY_GRADIENT,
  },
  "& .MuiSlider-rail": {
    color: "#FFFFFF",
    opacity: 0.3,
    height: HEIGHT,
  },
}));

export default CustomSlider;
