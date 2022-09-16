import { Divider, Stack, TextField, Typography } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";

const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h5">Search</Typography>
      <TextField placeholder="Keyword" fullWidth />
      <Divider className="my-7" />
      <Typography variant="h5" className="m-0">
        # Of Result Per Page
      </Typography>
      <Typography variant="h3" component="div">
        30 <Typography component="span">results</Typography>
      </Typography>

      <CustomSlider
        aria-label="Custom marks"
        defaultValue={20}
        step={10}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Stack>
  );
}
