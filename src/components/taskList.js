import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import profileImage from "../assets/Ellipse 9.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckIcon from "@mui/icons-material/Check";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { styled } from "@mui/material/styles";
import warningStateIcon from "../assets/State Icons=Warning.png";
import markedIcon from "../assets/state_icon_marked.png";
import callIcon from "../assets/Call.png";
import calenderIcon from "../assets/Calender.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function TaskList() {
  const tasklistSteppers = [
    {
      lable: "Quick Data Entry",
      status: "Completed",
    },
    {
      lable: "Eligibility Summary",
    },
    {
      lable: "Financial Details",
    },
    {
      lable: "Property Details",
    },
    {
      lable: "Account Details",
    },
    {
      lable: "Processing Fees",
    },
    {
      lable: "Document Valuation",
    },
    {
      lable: "Loan Pre-Approval",
    },
    {
      lable: "Sanction Offer",
    },
    {
      lable: "Legal Check",
    },
    {
      lable: "Technical Check",
    },
    {
      lable: "e-NACH Setup",
    },
    {
      lable: "e-Sign Agreement",
    },
    {
      lable: "Disbursal",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[500px] ">
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
            <Typography>New Customer</Typography>
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
        <Grid sx={{ p: 3 }} container spacing={2}>
          {tasklistSteppers.map((el, index) => (
            <>
              <Grid item xs={12} sx={{}}>
                <Item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "20px",
                    justifyContent: "space-between",
                    borderRadius: "16px",
                  }}
                >
                  <div style={{}}>
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#D2D5DB",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div style={{}}>{el.lable}</div>
                  <div className="flex ">
                    {el?.status == "Completed" ? (
                      <img src={markedIcon} alt="Completed" className="pr-3" />
                    ) : (
                      <img
                        src={warningStateIcon}
                        alt="pending"
                        className="pr-3"
                      />
                    )}
                    <KeyboardArrowRightIcon />
                  </div>
                </Item>
              </Grid>
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default TaskList;
