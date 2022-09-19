import { Divider, Stack, TextField, Typography } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";
import User from "./User";

const marks = [
  {
    value: 0,
    label: "3",
  },
  {
    value: 20,
    label: "6",
  },
  {
    value: 40,
    label: "9",
  },
  {
    value: 60,
    label: "12",
  },
  {
    value: 100,
    label: "50",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function Home() {
  return (
    <div className="w-full flex flex-row">
      <div className="w-2/3 px-32 pt-12">
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
            step={20}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            marks={marks}
          />
          <Divider className="my-10"></Divider>
        </Stack>
      </div>
      <div className="w-1/3 px-12 pt-8">
        <User />
      </div>
    </div>
  );
}
