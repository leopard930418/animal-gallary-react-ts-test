import { Grid, Stack, Typography } from "@mui/material";
import User from "../home/User";
import ResultCard from "./ResultCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useLocation, useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import axios from "axios";
import { useMediaQuery } from "@mui/material";
import UserDrawer from "../home/UserDrawer";

export default function Result() {
  const navigation = useNavigate();
  const location = useLocation();
  const Keyword: string = location.state.keyword;
  const Count: number = location.state.count;
  const searchKeyword = Keyword;
  const pageCount = Count;
  const [resultData, setResultData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const isPhoneMode = useMediaQuery("(max-width:640px)");

  useEffect(() => {
    axios({
      method: "get",
      url: `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${pageNum}&pageSize=${pageCount}&keyword=${searchKeyword}`,
    })
      .then((res) => {
        setResultData(res.data.data);
        setHasMore(res.data.totalPages > pageNum);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchMoreData = () => {
    setPageNum(pageNum + 1);
    axios({
      method: "get",
      url: `https://avl-frontend-exam.herokuapp.com/api/users/all?page=${pageNum}&pageSize=${pageCount}&keyword=${searchKeyword}`,
    })
      .then((res) => {
        const moreData = res?.data?.data;
        setResultData(resultData.concat(moreData));
        setHasMore(res.data.totalPages > pageNum);
      })
      .catch((error) => console.error(`Error ${error}`));
    return () => {};
  };
  return (
    <>
      {!isPhoneMode ? (
        <div className="w-full flex flex-row">
          <div className="w-full xl-max:w-2/3 px-32 pt-12">
            <Stack spacing={2}>
              <div className="flex flex-row items-center ml-[-12px]">
                <ArrowBackIosIcon
                  fontSize="medium"
                  style={{ color: "white" }}
                  onClick={() => navigation("/")}
                  className="cursor-pointer"
                />
                <Typography variant="h5">Results</Typography>
              </div>
              <InfiniteScroll
                dataLength={resultData.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                height={700}
              >
                <Grid container>
                  {resultData.map((items: any, index: number) => (
                    <Grid item lg={4} key={index}>
                      <ResultCard
                        imgsrc={"/images/Image1.svg"}
                        title={items.name}
                        username={items.username}
                      />
                    </Grid>
                  ))}
                </Grid>
              </InfiniteScroll>
              {/* <div className="fixed bottom-16">
            <div className="cursor-pointer w-[335px] rounded-md bg-white text-black hover:text-white hover:bg-black hover:border hover:border-white text-sm font-bold text-center py-3">
            Raad More
            </div>
          </div> */}
            </Stack>
          </div>
          <UserDrawer />
        </div>
      ) : (
        <div className="fixed top-0 left-0">
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
            <Typography variant="h5">Results</Typography>
          </div>
          <InfiniteScroll
            dataLength={resultData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={700}
          >
            <Grid container justifyContent={"center"}>
              {resultData.map((items: any, index: number) => (
                <Grid item lg={12} key={index}>
                  <ResultCard
                    imgsrc={"/images/Image1.svg"}
                    title={items.name}
                    username={items.username}
                  />
                </Grid>
              ))}
            </Grid>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
}
