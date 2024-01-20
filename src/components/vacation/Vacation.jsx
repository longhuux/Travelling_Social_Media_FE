import { Avatar, AvatarGroup, Grid } from "@mui/material";
import React from "react";
import { AVATAR_URL } from "../../config";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { orange } from "@mui/material/colors";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Test from "../feeds/Test";

function Vacation() {
  return (
    <>
      <div className="w-[600px] px-3 h-full flex-col justify-start items-start inline-flex overflow-y-auto scroll-smooth">
        <h1>Title of the vacation...</h1>
        <Avatar sx={{ width: 60, height: 60 }}>
          <img src={AVATAR_URL} alt="username" />
        </Avatar>
        <p>username</p>
        <div className="flex items-center">
          <p className="mx-2">with {5}</p>
          <PeopleIcon fontSize="large" color="primary" />
          <AvatarGroup max={10} className="justify-self-end">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          </AvatarGroup>
        </div>
        <div className="flex items-center w-full">
          <CalendarMonthOutlinedIcon
            fontSize="large"
            className="mr-2"
            sx={{ color: orange[500] }}
          />
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <p>Start:</p>
            </Grid>
            <Grid item xs={8}>
              <p>End:</p>
            </Grid>
          </Grid>
        </div>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          <TimelineItem>
            <TimelineOppositeContent color="textSecondary"></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Test />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}

export default Vacation;
