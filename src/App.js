import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/taskList";
import RemedialActions from "./components/remedialActions";
import Home from "./components/home";
import SwipeableDrawerComponent from "./components/swipeableDrawer/swipeableDrawer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hl-task-list" element={<TaskList />} />
        <Route path="/remedial-actions" element={<RemedialActions />} />
        <Route
          path="/swipeable-drawer"
          element={<SwipeableDrawerComponent />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
