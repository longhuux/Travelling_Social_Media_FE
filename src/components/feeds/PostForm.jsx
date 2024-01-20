import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, TextField } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import axios from "axios";

function PostForm() {
  const [media, setMedia] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [milestone, setMilestone] = useState();
  const [selectMilestoneForm, setSelectMilestoneForm] = useState(true);
  const [createMilestoneForm, setCreateMilestoneForm] = useState(false);
  const [content, setContent] = useState("");

  const handleMilestoneChange = (e) => {
    setMilestone(e.target.value);
  };
  const handleAddMilestoneChange = (e) => {
    setMilestone(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const toggleCreateMilestoneForm = (e) => {
    setCreateMilestoneForm(!createMilestoneForm);
    setSelectMilestoneForm(!selectMilestoneForm);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setMedia(file);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedFile(file);
        setPreview(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    return () => {
      media && URL.revokeObjectURL(media.preview);
    };
  }, [media]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("milestone", "658ad938b7932886de4ba079");
    formData.append("content", content);
    if (selectedFile) {
      formData.append("images", selectedFile);
    }

    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    const apiUrl =
      "http://localhost:8000/post/create-post/658d822c0dd01b0d2200bf5b";

    try {
      const response = await axios.post(apiUrl,formData)
      console.log(response)
      if (response.statusText==="OK") {
        console.log("Data successfully sent to the API");
      } else {
        console.error("Failed to send data to the API");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <div className="flex border w-full h-auto mt-2 rounded-lg">
        <div className="w-[40px] p-3">avt</div>
        <div className="flex flex-col w-full p-3 ">
          <div className="flex my-3 content-center items-center ">
            <h2 className="mr-4">Milestone: </h2>
            {selectMilestoneForm === true && (
              <div className="flex items-center !justify-around w-full">
                <FormControl className="w-[230px]" size="small">
                  <InputLabel id="demo-simple-select-label">Select</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={milestone}
                    label="Select"
                    onChange={handleMilestoneChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <h2>or create new</h2>
                <Fab
                  size="small"
                  color="primary"
                  aria-label="add"
                  onClick={toggleCreateMilestoneForm}
                >
                  <AddIcon />
                </Fab>
              </div>
            )}
            {createMilestoneForm === true && (
              <div className="flex self-center items-center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      slotProps={{ textField: { size: "small" } }}
                      label="Select a new milestone"
                      value={milestone}
                      onChange={handleAddMilestoneChange}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <RemoveCircleTwoToneIcon
                  onClick={toggleCreateMilestoneForm}
                  color="warning"
                  className="mx-3 self-center mt-2"
                />
              </div>
            )}
          </div>
          <TextField
            className="w-[96%] !ml-2 "
            id="standard-textarea"
            placeholder="Say something about your trip..."
            multiline
            maxRows={10}
            rows={3}
            variant="standard"
            value={content}
            onChange={handleContentChange}
          />
          {preview && (
            <div>
              {selectedFile.type.startsWith("image") ? (
                <img
                  className="rounded-lg"
                  src={preview}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
              ) : (
                <video
                  className="rounded-lg"
                  controls
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                >
                  <source src={preview} type={selectedFile.type} />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
          {preview && <hr className="mt-3" />}
          <form
            action="/create-post"
            method="post"
            encType="multipart/form-data"
          >
            <input
              id="media"
              type="file"
              onChange={handleFileChange}
              accept="image/*, video/*"
              hidden
            />
          </form>
          <div className="flex w-full justify-between p-2">
            <div>
              <label htmlFor="media" alt="Media">
                <IconButton aria-label="upload" component="span">
                  <ImageOutlinedIcon />
                </IconButton>
              </label>
              <label htmlFor="">
                <IconButton aria-label="upload">
                  <PlaceOutlinedIcon />
                </IconButton>
              </label>
            </div>
            <Button
              className="!rounded-full"
              variant="contained"
              onClick={handleSubmit}
            >
              Post
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default PostForm;
