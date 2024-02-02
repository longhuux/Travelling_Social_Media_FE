import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import dayjs from "dayjs";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

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


export default function CreateAlbum() {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("public");
  const [title, setTitle] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const handleShowAlert = () => {
    setOpenAlert(true);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="w-full !bg-blue-500 !rounded-full !text-white"
      >
        Create
      </Button>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          variant="filled"
          sx={{ width: "100%",zIndex: 100000 }}
        >
          Successfully created a vacation
        </Alert>
      </Snackbar>
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
            defaultValue={"public"}
          >
            <option value={"public"}>Everyone</option>
            <option value={"onlyMe"}>Only Me</option>
            <option value={"onlyUserChoose"}>Custom</option>
          </select>
          {selectedOption === "onlyUserChoose" && (
            <Autocomplete
              className="my-3 !z-0"
              multiple
              size="small"
              limitTags={2}
              id="multiple-limit-tags"
              onChange={(event, value) => setAllowedUsers(value)}
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
              autoFocus={true}
            />
            
            <Button
              className="w-full !bg-blue-500 !rounded-full !text-white"
            //   onClick={handleSubmit}
            >
              Create
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
