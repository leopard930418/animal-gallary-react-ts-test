/* eslint-disable array-callback-return */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UserInfoCard from "./UserInfoCard";

import axios from "axios";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function User() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [userData, setUserData] = React.useState([]);
  const [followingData, setFollowingData] = React.useState([]);
  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://avl-frontend-exam.herokuapp.com/api/users/all?page=1&pageSize=10",
    })
      .then((res) => {
        const allData = res?.data?.data;
        setUserData(allData);
        const followData: any = [];
        allData.map((item: any) => {
          if (item.isFollowing === true) {
            followData.push(item);
          }
          setFollowingData(followData);
        });
      })
      .catch((error) => console.error(`Error ${error}`));
    return () => {};
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
          >
            <Tab label="Followers" {...a11yProps(0)} />
            <Tab label="Following" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <>
          <TabPanel value={value} index={0}>
            {userData.map((item: any, index: number) => (
              <UserInfoCard
                avatar={item?.avater}
                name={item?.name}
                username={item?.username}
                isFollowing={item?.isFollowing}
                key={index}
              />
            ))}
          </TabPanel>
        </>
        <TabPanel value={value} index={1}>
          {followingData.map((item: any, index: number) => (
            <UserInfoCard
              avatar={item?.avater}
              name={item?.name}
              username={item?.username}
              isFollowing={item?.isFollowing}
              key={index}
            />
          ))}
        </TabPanel>
      </Box>
    </>
  );
}
