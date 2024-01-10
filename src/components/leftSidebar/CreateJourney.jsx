import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LicenseInfo } from "@mui/x-date-pickers-pro";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/slice/userSlice";

LicenseInfo.setLicenseKey(
  "e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y"
);
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: "user1", year: 1994 },
  { title: "user2", year: 1972 },
];
export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [milestones, setMilestones] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userTags, setUseTags] = useState([]);
  const [allowedUsers, setAllowedUsers] = useState([]);
  const [estimatedTime, setEstimatedTime] = useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);
  const [startedAt, setStartedAt] = useState();
  const [endedAt, setEndedAt] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleUserTagsChange = (e) => {
    setUseTags(e.target.value);
  };
  const handleAllowedUsersChange = (e) => {
    setAllowedUsers(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const usernames = users.map((user) => user.userName);

  const handleAddInput = () => {
    setMilestones([...milestones, { id: milestones.length, value: "" }]);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleInputChange = (id, value) => {
    const updatedMilestones = milestones.map((milestone) =>
      milestone.id === id ? { ...milestone, value } : milestone
    );
    setMilestones(updatedMilestones);
  };

  const handleRemoveInput = (id) => {
    const updatedMilestones = milestones.filter(
      (milestone) => milestone.id !== id
    );
    setMilestones(updatedMilestones);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    // formData.append("privacy", selectedOption);
    formData.append("title", title);
    formData.append("desc", desc);
    // formData.append("paticipants", userTags);
    formData.append("startedAt", estimatedTime[0]);
    formData.append("endedAt", estimatedTime[1]);

    if (selectedOption === "allowedUsers") {
      formData.append("allowedUsers", allowedUsers);
    }
    console.log(selectedOption,title,desc,userTags,estimatedTime[0],estimatedTime[1])
    console.log(formData)
    const apiUrl = "http://localhost:8000/vacation/create/658839433bd62f956a2f0876";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
        // const response = await axios.post(apiUrl,{
        //     title: title,
        //     desc: desc,
        //     startedAt: estimatedTime[0],
        //     endedAt: estimatedTime[1],
        // })

        console.log(response)

      if (response.ok) {
        console.log("Data successfully sent to the API");
      } 
      else {
        console.error("Failed to send data to the API");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="w-full !bg-blue-500 !rounded-full !text-white"
      >
        Start a trip
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=" !overflow-auto"
      >
        <Box sx={style} className=" !border-none !rounded-lg !w-[600px]	">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Start a new trip
          </Typography>
          <select
            className="w-fit rounded-full border border-solid text-blue-400 px-2 border-blue-400"
            id="privacyOptions"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value={"public"}>Everyone</option>
            <option value={"onlyMe"}>Only Me</option>
            <option value={"allowedUsers"}>Custom</option>
          </select>
          {selectedOption === "allowedUsers" && (
            <Autocomplete
              className="my-3 !z-0"
              multiple
              size="small"
              limitTags={2}
              id="multiple-limit-tags"
              onChange={handleAllowedUsersChange}
              options={users}
              getOptionLabel={(option) => option.userName}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Custom privacy list"
                  placeholder="Username"
                  className="!z-0"
                />
              )}
            />
          )}
          <form className="p-4 md:p-5 flex flex-col gap-4">
            <TextField
              id="standard-multiline-flexible"
              label="Title"
              multiline
              maxRows={2}
              variant="standard"
              value={title}
              onChange={handleTitleChange}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Description"
              multiline
              maxRows={6}
              variant="standard"
              value={desc}
              onChange={handleDescChange}
            />
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={users}
              disableCloseOnSelect
              //   onChange={handleUserTagsChange}
              onChange={(event, value) => setUseTags(value)}
              getOptionLabel={(option) => option.userName}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.userName}
                </li>
              )}
              //   style={{ width: 500 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Participants..."
                  placeholder="Add an user"
                />
              )}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem label="Estimated time: " component="DateRangePicker">
                <DateRangePicker
                  value={estimatedTime}
                  onChange={(newValue) => setEstimatedTime(newValue)}
                />
              </DemoItem>
            </LocalizationProvider>
            <div className="flex items-center">
              <h1 className="m mr-4">Milestones: </h1>
            </div>
            {milestones.map((milestone) => (
              <div key={milestone.id} className="w-full">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Milestone"
                      onChange={(e, value) => {
                        setMilestones(value);
                      }}
                    />
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Describe"
                      variant="outlined"
                      multiline
                      maxRows={4}
                      className="w-full"
                    />
                    <RemoveCircleTwoToneIcon
                      onClick={() => handleRemoveInput(milestone.id)}
                      color="warning"
                      className="self-center"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
            ))}
            <Fab
              size="small"
              color="primary"
              aria-label="add"
              onClick={handleAddInput}
            >
              <AddIcon />
            </Fab>
            <Button
              className="w-full !bg-blue-500 !rounded-full !text-white"
              onClick={handleSubmit}
            >
              Create
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
