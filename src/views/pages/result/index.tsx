import { Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import User from "../home/User";
import ResultCard from "./ResultCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigation = useNavigate();
  const resultData: any = [
    {
      imgsrc: "/images/Image1.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image2.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image3.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image1.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image2.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image3.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image1.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image2.svg",
      title: "This is a title",
      username: "username",
    },
    {
      imgsrc: "/images/Image3.svg",
      title: "This is a title",
      username: "username",
    },
  ];
  return (
    <div className="w-full flex flex-row">
      <div className="w-full lg:w-2/3 px-32 pt-12">
        <Stack spacing={2}>
          <div className="flex flex-row items-center">
            <ArrowBackIosIcon
              fontSize="medium"
              style={{ color: "white" }}
              onClick={() => navigation("/")}
              className="cursor-pointer"
            />
            <Typography variant="h5">Results</Typography>
          </div>
          <Grid container>
            {resultData.map((items: any, index: number) => (
              <Grid item lg={4} key={index}>
                <ResultCard
                  imgsrc={items.imgsrc}
                  title={items.title}
                  username={items.username}
                />
              </Grid>
            ))}
          </Grid>
          <div className="fixed bottom-16">
            <div className="cursor-pointer w-[335px] rounded-md bg-white text-black hover:text-white hover:bg-black hover:border hover:border-white text-sm font-bold text-center py-3">
              Raad More
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
