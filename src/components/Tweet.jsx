import { Textarea, Button, Card, Paper } from "@mantine/core";
import { useState } from "react";
import "./Tweet.css"

export default function Tweet() {
  const [tweet, setTweet] = useState("");

  const handleTweet = () => {
    console.log("Tweet posted:", tweet);
    setTweet("");
  };

  return (
    <Paper shadow="sm" p="lg" >
      <Textarea
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        autosize
        minRows={3}
      />

      <Button mt="md" onClick={handleTweet}>
        Tweet
      </Button>
    </Paper>
  );
}
