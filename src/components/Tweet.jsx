import { Textarea, Paper } from "@mantine/core";
// import { useState } from "react";
import "./Home.css";

function getStructuredTweet(id, date,user, text ) {

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
          >{date}</div>
        </div>
      </div>
    </Paper>
  );
}

export default function Tweet({ id, date,user, text  }) {
  return getStructuredTweet(id, date,user, text );
}
