import { Divider, Stack, TextField, Typography } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import UserDrawer from "./UserDrawer";
const marks = [
  {
    value: 3,
    label: "3",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 9,
    label: "9",
  },
  {
    value: 12,
    label: "12",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 18,
    label: "50",
  },
];

function valuetext(value: number) {
  return `${value}`;
}

export default function Home() {
  const navigate = useNavigate();
  const [searchKeyword, setSearchKeyword] = useState("");
  // const [resultCount, setResultCount] = useState(0);
  return (
    <div className="w-full flex flex-row flex-grow">
      <div className="w-full xl-max:w-2/3 px-4 sm:px-32 pt-20 sm:pt-12 flex flex-col justify-between flex-grow">
        <Stack spacing={2}>
          <Typography variant="h5">Search</Typography>
          <TextField
            placeholder="Keyword"
            fullWidth
            // autoFocus
            name="searchkeyword"
            id="searchkeyword"
            value={searchKeyword}
            onChange={(event) => {
              setSearchKeyword(event.target.value);
            }}
          />
          <Divider className="my-7" />
          <Typography variant="h5" className="m-0">
            # Of Result Per Page
          </Typography>
          <Typography variant="h3" component="div">
            {30} <Typography component="span">results</Typography>
          </Typography>

          <CustomSlider
            aria-label="Custom marks"
            defaultValue={6}
            step={3}
            min={3}
            max={18}
            valueLabelDisplay="off"
            getAriaValueText={valuetext}
            // value={resultCount}
            marks={marks}
            onChange={(event: Event) => {
              // setResultCount(event.target :EventTarget | null ?.value);
            }}
          />
          <Divider className="mt-60 sm:my-10"></Divider>
        </Stack>
        <div className="w-full pb-24">
          <div className="w-full">
            <div
              className="cursor-pointer w-full sm:w-1/2 rounded-md bg-white text-black hover:text-white hover:bg-black hover:border hover:border-white text-sm font-bold text-center py-3"
              onClick={() => navigate("/result", { state: searchKeyword })}
            >
              SEARCH
            </div>
          </div>
        </div>
      </div>
      <UserDrawer />
    </div>
  );
}
