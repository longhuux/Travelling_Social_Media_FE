import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Autocomplete, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { AddAPhoto } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Open Child Modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          className=" !border-none !rounded-lg !w-[600px]"
          sx={{ ...style, width: 200 }}
        >
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function CreateAlbum() {
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState("public");
  const { users, status, error } = useSelector((state) => state.user);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  if (status === "loading") {
    return (
      <div className="w-full flex justify-center items-center">
        <CircularProgress color="inherit" className="flex justify-center" />
      </div>
    );
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Button
        className="!w-full !bg-green-500 !rounded-full !text-white"
        onClick={handleOpen}
      >
        Create an album
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          className=" !border-none !rounded-lg !w-[600px]"
          sx={{ ...style, width: 400 }}
        >
          <h2 id="parent-modal-title">Create an album</h2>
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
          <div className="bg-slate-500 w-full h-60">
            <input id="media" type="file" onChange={onSelectFile} hidden />
            {selectedFile && <img src={preview} />}
            <label className="top-1/2 left-1/2" htmlFor="media" alt="Media">
              <IconButton>
                <AddAPhoto />
              </IconButton>
            </label>
          </div>
          <ChildModal />
        </Box>
      </Modal>
    </>
  );
}
