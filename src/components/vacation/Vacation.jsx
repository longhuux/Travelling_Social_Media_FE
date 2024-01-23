import { Avatar, AvatarGroup, Grid, Typography } from "@mui/material";
import React from "react";
import { AVATAR_URL } from "../../config";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { orange } from "@mui/material/colors";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";

import Test from "../feeds/Test";

function Vacation() {
  return (
    <>
      <div className="w-[643px] px-3 h-full flex-col justify-start items-start inline-flex overflow-y-auto scroll-smooth">
        <div className="w-full border-b mb-3 pb-3 flex flex-col justify-center items-center self-center">
          <h1 className="f font-bold text-2xl text-blue">Title of the vacation...</h1>
          <Avatar sx={{ width: 60, height: 60 }}>
            <img src={AVATAR_URL} alt="username" />
          </Avatar>
          <p>username</p>
          <div className="flex items-center">
            <PeopleIcon fontSize="large" color="primary" />
            <p className="mx-2">5 members</p>
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
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector sx={{ bgcolor:"success.main" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "1px", px: 2 }}>
              <Typography variant="h6" component="span">
                milestone
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
              <Test />
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
}

export default Vacation;
