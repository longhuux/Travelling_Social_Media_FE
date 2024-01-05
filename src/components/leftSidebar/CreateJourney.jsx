import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [milestones, setMilestones] = React.useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/user/get_all_user');
        setUsers(response.data.user); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 



  const handleAddInput = () => {
    setMilestones([...milestones, { id: milestones.length, value: "" }]);
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

  const handleSubmit = () => {
    // Handle submission of milestones array
    console.log("Milestones:", milestones);
  };

  return (
    <>
      <Button onClick={handleOpen} className='w-full !bg-blue-500 !rounded-full !text-white'>Start a trip</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className=' !border-none !rounded-lg !w-[600px]'
>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Start a new trip
          </Typography>
          <form className="p-4 md:p-5 flex flex-col gap-4">
                <TextField
                  id="standard-multiline-flexible"
                  label="Title"
                  multiline
                  maxRows={1}
                  variant="standard"
                />
                <TextField
                  id="standard-multiline-flexible"
                  label="Description"
                  multiline
                  maxRows={6}
                  variant="standard"
                />
                <Autocomplete
                  multiple
                  id="checkboxes-tags-demo"
                  options={users}
                  disableCloseOnSelect
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
                  <DemoItem
                    label="Estimated time: "
                    component="DateRangePicker"
                  >
                    <DateRangePicker />
                  </DemoItem>
                </LocalizationProvider>
                <div className="flex items-center">
                    <h1 className="m mr-4">Milestones:  </h1>
                </div>
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="w-full">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Milestone" />
                        <TextField
                          id="outlined-multiline-flexible"
                          label="Describe"
                          variant="outlined"
                          multiline
                          maxRows={4}
                          className="w-full"
                        />
                        <RemoveCircleTwoToneIcon onClick={() => handleRemoveInput(milestone.id)} color="warning" className="self-center"/>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                ))}
                   <Fab size="small" color="primary" aria-label="add" onClick={handleAddInput}>
                  <AddIcon />
                </Fab>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-9"
                >
                  <svg
                    className="me-1 -ms-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Create
                </button>
              </form>
        </Box>
      </Modal>
    </>
  );
}
