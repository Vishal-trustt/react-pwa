import {
  Button,
  Box,
  SwipeableDrawer,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import "./swipeableDrawer.css";

function SwipeableDrawerComponent() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const swipeableDrawerFrom = (anchor) => (
    <div
      style={{
        // width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "550px",
        backgroundColor: "white",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="px-10">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // flexDirection: "column",
            alignItems: "center",
            height: "20px",
          }}
        >
          <div
            style={{
              width: "100px",
              borderRadius: "5px",
              height: "8px",
              backgroundColor: "grey",
              cursor: "pointer",
            }}
            onClick={toggleDrawer(anchor, false)}
          ></div>
        </div>
        <div className="mt-10">
          <h2>
            <b>Loan Details</b>
          </h2>
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Leander Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Document Type"
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value={10}>Aarohan</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Loan Amount
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <b>&#8377;</b>
                </InputAdornment>
              }
              label="Amount"
            />
          </FormControl>
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              EMI Amount
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <b>&#8377;</b>
                </InputAdornment>
              }
              label="EMI Amount"
            />
          </FormControl>
        </div>

        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel htmlFor="outlined-adornment-amount">
              Current Balance
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <b>&#8377;</b>
                </InputAdornment>
              }
              label="Current Balance"
            />
          </FormControl>
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Tenure (Months)
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Document Type"
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value={10}>12</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Repayment Frequency
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Document Type"
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value={10}>Monthly</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <TextField />
        </div>
        <div className="mt-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {" "}
              Document Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={10}
              label="Document Type"
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value={10}>Loan Sanction Letter</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex justify-center" style={{ position: "relative" }}>
      <div
        className="md:max-w-[500px] min-w-[400px]"
        style={{
          height: "100vh",
          // backgroundColor: "red",
          position: "relative",
        }}
      >
        {" "}
        <div className="flex justify-center">
          <Button
            sx={{
              position: "absolute",
              width: "350px",
              bottom: "50px",
              // left: "40%",
              height: "44px",
              backgroundColor: "#979797",
              color: "white",
              padding: "10px",
              mb: "10px",
              borderRadius: "10px",
            }}
            onClick={toggleDrawer("bottom", true)}
          >
            Add Other Loan Details
          </Button>
          <Button
            sx={{
              position: "absolute",
              width: "350px",
              bottom: "0px",
              // left: "40%",
              height: "44px",
              backgroundColor: "#cacaca",
              color: "white",
              padding: "10px",
              mb: "10px",
              borderRadius: "10px",
            }}
          >
            Submit
          </Button>

          <React.Fragment key="bottom">
            <SwipeableDrawer
              containerStyle={{ height: "calc(100% - 0px)", top: 10 }}
              anchor="bottom"
              open={state["bottom"]}
              onClose={toggleDrawer("bottom", false)}
              onOpen={toggleDrawer("bottom", true)}
            >
              {swipeableDrawerFrom("bottom")}
            </SwipeableDrawer>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}

export default SwipeableDrawerComponent;
