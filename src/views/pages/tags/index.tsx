import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import TagCard from "./TagCard";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function Tags() {
  // const tagsData = [
  //   { tagName: "Cool", resultCount: 350 },
  //   { tagName: "Beautiful", resultCount: 210 },
  //   { tagName: "Easy", resultCount: 190 },
  //   { tagName: "Summary", resultCount: 105 },
  //   { tagName: "Hot", resultCount: 80 },
  //   { tagName: "Passage Specific", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  //   { tagName: "Tag", resultCount: 50 },
  // ];
  const [tagsData, setTagsData] = useState([]);
  const isPhoneMode = useMediaQuery("(max-width:600px)");
  const navigation = useNavigate();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://avl-frontend-exam.herokuapp.com/api/tags",
    })
      .then((res) => {
        setTagsData(res?.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {isPhoneMode ? (
        <div className="fixed top-0 left-0 overflow-auto">
          <div className="flex flex-row items-center p-4">
            <ArrowBackIosIcon
              fontSize="medium"
              style={{ color: "white" }}
              onClick={() => navigation("/")}
              className="cursor-pointer"
            />
            <div className="text-3xl text-white pl-4">Home Page</div>
          </div>
          <div className="px-4 py-4">
            <Typography variant="h5">Tags</Typography>
          </div>

          <Grid container spacing={2} justifyContent="center">
            {tagsData.map((items: any, index: number) => (
              <Grid item lg={6} key={index}>
                <TagCard tagName={items.name} resultCount={items.count} />
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div className="w-full flex flex-row">
          <div className="w-full px-32 pt-12">
            <Stack spacing={2}>
              <Typography variant="h5">Tags</Typography>
              <Grid container columns={10} rowSpacing={2}>
                {tagsData.map((items: any, index: number) => (
                  <Grid item lg={2} key={index}>
                    <TagCard tagName={items.name} resultCount={items.count} />
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </div>
        </div>
      )}
    </>
  );
}
