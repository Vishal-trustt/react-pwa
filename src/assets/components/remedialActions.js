import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import profileImage from "../assets/Ellipse 9.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import callIcon from "../assets/Call.png";
import calenderIcon from "../assets/Calender.png";
import markedIcon from "../assets/state_icon_marked.png";
import cross from "../assets/State 3.png";
import "./remedialActions.css";
import AddIcon from "@mui/icons-material/Add";
import camIcon from "../assets/Vector.png";

function RemedialActions() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const handleImageChange = (e) => {
    console.log(e);
    const files = e.target.files;
    const selectedImageArray = [...selectedImages, ...Array.from(files)];

    setSelectedImages(selectedImageArray);

    const imagePreviewArray = [];
    selectedImageArray.forEach((image) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        imagePreviewArray.push(e.target.result);
        if (imagePreviewArray.length === selectedImageArray.length) {
          setImagePreviews(imagePreviewArray);
        }
      };

      reader.readAsDataURL(image);
    });
  };
  const handleRemoveImage = (index) => {
    const updatedImagePreviews = [...imagePreviews];
    updatedImagePreviews.splice(index, 1);
    setImagePreviews(updatedImagePreviews);

    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages.splice(index, 1);
    setSelectedImages(updatedSelectedImages);
  };
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[500px]">
        <div
          style={{
            height: "179px",
            borderRadius: " 0 0 16px 16px",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", height: "55.68px" }}
          >
            <ArrowBackIosNewIcon sx={{ mr: 2 }} />
            <Typography>Remedial Actions (Co-Borrower)</Typography>
          </Box>
          <hr></hr>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              mt: "15px",
              height: "100px",
              p: 2,
            }}
          >
            <div style={{ alignContent: "start" }}>
              <img
                alt="customer_image"
                width="80px"
                height="80px"
                src={profileImage}
              />
            </div>
            <div>
              <Typography>
                {" "}
                <b>Sourav Kumar</b> <span>(Borrower)</span>
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={callIcon} alt="Contact No" />
                &nbsp;
                <p style={{ margin: 0 }}>99860 85859</p>&nbsp;
                <img src={markedIcon} alt="Verified" />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img src={calenderIcon} alt="Date" />
                &nbsp;
                <p style={{ margin: 0 }}>10/12/1978</p>&nbsp;
              </Box>
            </div>
            <div>
              <KeyboardArrowRightIcon />
            </div>
          </Box>
        </div>

        <Container
          sx={{
            mt: 2,
            p: 2,
            borderRadius: "16px 16px 0 0",
            backgroundColor: "white",
          }}
        >
          <div>
            <Typography variant="h6" fontWeight={600}>
              Borrower Last 6 Months DPD
            </Typography>
            <p>
              Max DPD in the last 6 months is 15 which is greater than the 0
              dpd. Capture the required document if the payment is already paid.
            </p>
            <div className="mt-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Document Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  label="Document Type"
                  sx={{ borderRadius: "10px" }}
                >
                  <MenuItem value={10}>Repayment Receipt</MenuItem>
                </Select>
              </FormControl>
            </div>
            <h3> Document Proof</h3>
            <Box
              sx={{
                mt: 2,
                p: 5,
                border: "1px solid grey",
                borderRadius: "5px",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                container
                spacing={1}
              >
                {imagePreviews.map((preview, index) => (
                  <Grid
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    item
                    xs={4}
                  >
                    <div className="imagePreview-box" key={index}>
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        style={{ maxHeight: "100px" }}
                      />
                      <button onClick={() => handleRemoveImage(index)}>
                        <img src={cross} />
                      </button>
                    </div>
                  </Grid>
                ))}

                <Grid
                  item
                  xs={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    id="addFile-icon"
                    onClick={() =>
                      document.getElementById("file-upload-input").click()
                    }
                  >
                    <input
                      id="file-upload-input"
                      type="file"
                      name="file-upload"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e)}
                      multiple
                      style={{ display: "none" }}
                    />
                    <AddIcon />
                  </div>
                </Grid>
              </Grid>
            </Box>
            <div className="mt-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  label="Reason"
                  sx={{ borderRadius: "10px" }}
                >
                  <MenuItem value={10}>
                    Details are not updated in bureau
                  </MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </Container>
        <hr style={{}} />
        <Container
          sx={{
            p: 2,
            backgroundColor: "white",
          }}
        >
          <div style={{ alignItems: "center" }}>
            <Typography variant="h6" fontWeight={600}>
              Borrower No. of times DPD - zero
            </Typography>
            <p>
              No. of times DPD greater than zero is 15 which is greater than the
              12 dpd. Capture the required document if the payment is already
              paid.
            </p>
            <div className="mt-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Document Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={0}
                  label="Document Type"
                  sx={{ borderRadius: "10px" }}
                >
                  <MenuItem value={0}>select</MenuItem>
                  <MenuItem value={10}>Repayment Receipt</MenuItem>
                  <MenuItem value={11}>.</MenuItem>
                </Select>
              </FormControl>
            </div>
            <h3> Document Proof</h3>
            <Box
              sx={{
                mt: 2,
                borderRadius: "5px",
                backgroundColor: "#ecedf3",
                height: "120px",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                container
                spacing={1}
              >
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "120px",
                  }}
                >
                  <img src={camIcon} />
                  <p style={{ fontSize: "12px", marginTop: "10px" }}>
                    Tap to Capture Photo(s){" "}
                  </p>
                </Grid>
              </Grid>
            </Box>
            <div className="mt-5">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Reason</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  label="Reason"
                  sx={{ borderRadius: "10px" }}
                >
                  <MenuItem value={10}>No Document Proof</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                fullWidth
                sx={{
                  // width: "328px",
                  color: "white",
                  height: "44px",
                  // p: "10px, 16px, 10px, 16px",
                  mt: 2,
                  borderRadius: "11px",
                  backgroundColor: "#111827",
                }}
              >
                Done
              </Button>
            </div>
          </div>
          {/* <Webcam
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
          >
            {({ getScreenshot }) => (
              <button
                onClick={() => {
                  const imageSrc = getScreenshot();
                }}
              >
                Capture photo
              </button>
            )}
          </Webcam> */}
        </Container>
      </div>
    </div>
  );
}

export default RemedialActions;
