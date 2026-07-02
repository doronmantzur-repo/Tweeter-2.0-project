import { Textarea, Paper } from "@mantine/core";
// import { useState } from "react";
import "./Home.css";

function getStructuredTweet(text, user, date, time) {
  console.log("AAA", text, user, date, time);
  return (
    <Paper shadow="md" p="lg" className="tweet-paper">
      <div style={{ position: "relative" }}>
        <Textarea value={`\n\n${text}`} minRows={3} readOnly />
        <div className="tweet-top">
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "12px",
              fontWeight: "bold",
              pointerEvents: "none",
              opacity: 0.4,
            }}
          >
            {user.name}
          </div>
          <div
          style={{
              position: "absolute",
              top: "8px",
              right: "12px",
              fontWeight: "bold",
              pointerEvents: "none",
              opacity: 0.4,
            }}
          >{date} {time}</div>
        </div>
      </div>
    </Paper>
  );
}

export default function Tweet({ text, user, date, time }) {
  return getStructuredTweet(text, user, date, time);
}
