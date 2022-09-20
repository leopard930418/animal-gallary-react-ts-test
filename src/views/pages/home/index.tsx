import { Divider, Stack, TextField, Typography } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";
import User from "./User";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-row">
      <div className="w-full lg:w-2/3 px-32 pt-12">
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

          <div className="fixed bottom-20">
            <div
              className="cursor-pointer w-[335px] rounded-md bg-white text-black hover:text-white hover:bg-black hover:border hover:border-white text-sm font-bold text-center py-3"
              onClick={() => navigate("/result")}
            >
              SEARCH
            </div>
          </div>
        </Stack>
      </div>
      <div className="w-full lg:w-1/3 px-2 pt-8">
        <User />
      </div>
    </div>
  );
}
