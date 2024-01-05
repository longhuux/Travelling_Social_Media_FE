import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IconButton, TextField } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import PublicIcon from "@mui/icons-material/Public";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InputLabel from "@mui/material/InputLabel";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

function PostForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [media, setMedia] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [customInput, setCustomInput] = useState("");
  const [milestone, setMilestone] = useState();
  const [selectMilestoneForm, setSelectMilestoneForm] = useState(true);
  const [createMilestoneForm, setCreateMilestoneForm] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleMilestoneChange = (e) => {
    setMilestone(e.target.value);
  };

  const handleCustomInputChange = (event) => {
    setCustomInput(event.target.value);
  };

  const toggleCreateMilestoneForm = (e) => {
    setCreateMilestoneForm(!createMilestoneForm);
    setSelectMilestoneForm(!selectMilestoneForm);
  };

  const disabledSelectMilestone = (e) => {
    setSelectMilestoneForm(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

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

  const handleUploadMedia = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setMedia(file);
  };
  return (
    <>
      <div className="flex border w-full h-auto mt-2 rounded-lg">
        <div className="w-[40px] p-3">avt</div>
        <div className="flex flex-col w-full p-3 ">
          <select
            className="w-fit rounded-full border border-solid text-blue-400 px-2 border-blue-400"
            id="privacyOptions"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value={0}>Everyone</option>
            <option value={1}>Only Me</option>
            <option value={2}>Custom</option>
          </select>
          {selectedOption == 2 && (
            <Autocomplete
              className="my-3 !z-0"
              multiple
              size="small"
              limitTags={2}
              id="multiple-limit-tags"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Custom privacy list"
                  placeholder="Username"
                  className="!z-0"
                />
              )}
              sx={{ width: "500px" }}
            />
          )}
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
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker slotProps={{ textField: { size: 'small' } }} label="Select a new milestone" />
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
          {preview && (<hr className="mt-3"/>)}
          <input
            id="media"
            type="file"
            onChange={handleFileChange}
            accept="image/*, video/*"
            hidden
          />
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
            <Button className="!rounded-full" variant="contained">
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
