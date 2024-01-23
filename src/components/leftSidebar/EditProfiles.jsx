import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import { updateProfile } from "../../services/User";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";

const EditProfileModal = ({ open, handleClose, user }) => {
  const [fullName, setFullName] = useState(user.user.fullName);
  const [userName, setUserName] = useState(user.user.userName);
  const [dateOfBirth, setDateOfBirth] = useState(user.user.dateOfBirth);
  // const [avatar, setAvatar] = useState(user.user.avatar);
  // const [backgroundImage, setBackgroundImage] = useState(user.user.avatar);
  console.log(user.user);
  const handleSave = () => {
    const formData = new FormData();
    formData.append("fullName", String(fullName));
    formData.append("userName", String(userName));
    formData.append("dateOfBirth", String(dateOfBirth));
    // if (avatar) {
    //   formData.append("avatar", avatar);
    // }
    // if (backgroundImage) {
    //   formData.append("backgroundImage", backgroundImage);
    // }
    updateProfile(formData, user.user._id)
      .then((data) => {
        setFullName(data.user.fullName);
        setUserName(data.user.userName);
        setDateOfBirth(data.user.dateOfBirth);
        // setLocation(data.user.bio);
        // setAvatar(data.user.avatar);
        // setBackgroundImage(data.user.avatar);
        handleClose();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          label="Full Name"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="User Name"
          fullWidth
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Date of Birth"
          fullWidth
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        {/* <label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <Button component="span">
            <CameraAltIcon />
            _Avatar
          </Button>
        </label>
        <label>
          <input
            style={{ display: "none" }}
            type="file"
            onChange={(e) => setBackgroundImage(e.target.files[0])}
          />
          <Button component="span">
            <CameraAltIcon />
            _Background
          </Button>
        </label> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditProfileModal;
