import React from "react";

function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <a href="/hl-task-list">HL task list NTB</a>
      <a href="/remedial-actions">
        {" "}
        Elig Summary - Remedial Actions (Co-Borrower)
      </a>
      <a href="/swipeable-drawer">Swipeable Drawer</a>
    </div>
  );
}

export default Home;
