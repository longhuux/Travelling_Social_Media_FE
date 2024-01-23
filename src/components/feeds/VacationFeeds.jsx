import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import { Avatar, AvatarGroup, Button, Grid, Tooltip } from "@mui/material";
import { AVATAR_URL } from "../../config";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";
import TourTwoToneIcon from "@mui/icons-material/TourTwoTone";
import { green, orange } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

function VacationFeeds(vacation) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleSubmit = ()=>{
    navigate(`/vacation/${vacation.vacation._id}`)
  }

  console.log(vacation.vacation._id)
  return (
    <>
    <div className="mb-5">
      <div className="border w-full rounded-lg px-8 pt-8 rounded-b-none">
        <div className="flex gap-6">
          <div className="w-2/12 flex flex-col items-center">
            <Avatar src={`${vacation?.vacation}`} sx={{ width: 60, height: 60 }}></Avatar>
            <p>{vacation.vacation.createdBy.fullName}</p>
          </div>
          <div className="w-full">
            <p className=" text-sky-600 text-2xl antialiased font-bold tracking-wide text-wrap uppercase border-b p-3">
              {vacation.vacation.title}
            </p>
            <div className="flex items-center py-2">
              <PeopleIcon fontSize="large" color="primary" />
              <p className="mx-2">
                {vacation.vacation.participants.length} Participants
              </p>
              <AvatarGroup max={7} className="justify-self-end">
                {vacation.vacation.participants.map((user) => (
                  <Tooltip title={`${user.fullName}`} key={user._id}>
                    <Avatar alt={user[0]} src="/static/images/avatar/1.jpg" />
                  </Tooltip>
                ))}
              </AvatarGroup>
            </div>
            <div className="flex items-center">
              <CalendarMonthOutlinedIcon
                fontSize="large"
                className="mr-2"
                sx={{ color: orange[500] }}
              />
              <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                  <p className="border-r">
                    Start: {dayjs(vacation.vacation.startedAt).format("LL")}
                  </p>
                </Grid>
                <Grid item xs={8}>
                  <p>End: {dayjs(vacation.vacation.endedAt).format("LL")}</p>
                </Grid>
              </Grid>
            </div>
            <div className="py-2">
              <div className="flex items-center">
                <TourTwoToneIcon
                  fontSize="large"
                  className="mr-2"
                  sx={{ color: green[500] }}
                />
                <p>Recent milestones:</p>
              </div>
              <div className="pl-11">
                <Accordion
                  expanded={expanded}
                  onChange={handleExpansion}
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 200 }}
                  sx={{
                    "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
                    "& .MuiAccordionDetails-root": {
                      display: expanded ? "block" : "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography>Milestone 1</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography>Milestone 2</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t py-2 mt-4">
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item>
              <Tooltip title="React">
                <FavoriteIcon className="mr-1" color="warning" />
                {vacation.vacation.likes.length}
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="Comment">
                <ChatBubbleIcon className="mr-1" color="primary" />
                {vacation.vacation.comments.length}
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title="View">
                <EqualizerOutlinedIcon
                  className="mr-1"
                  sx={{ color: green[500] }}
                />
                {123}
              </Tooltip>
            </Grid>
          </Grid>
        </div>
      </div>
      <Button onClick={handleSubmit} variant="contained" className="w-full !rounded-t-none">
        View details
      </Button>
      </div>
    </>
  );
}

export default VacationFeeds;
