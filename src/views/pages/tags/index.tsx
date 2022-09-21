import { Divider, Grid, Stack, TextField, Typography } from "@mui/material";
import CustomSlider from "../../components/CustomSlider";
import { useNavigate } from "react-router-dom";
import TagCard from "./TagCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Tags() {
  const navigate = useNavigate();
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
    <div className="w-full flex flex-row">
      <div className="w-full px-32 pt-12">
        <Stack spacing={2}>
          <Typography variant="h5">Tags</Typography>
          <Grid container columns={10} rowSpacing={2}>
            {tagsData.map((items: any, index: number) => (
              <Grid item lg={2} key={index}>
                <TagCard
                  tagName={items.name}
                  resultCount={items.count}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </div>
    </div>
  );
}
