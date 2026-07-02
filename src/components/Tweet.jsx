import { Textarea, Button, Card } from "@mantine/core";
import { useState } from "react";

export default function Tweet() {
  const [tweet, setTweet] = useState("");

  const handleTweet = () => {
    console.log("Tweet posted:", tweet);
    setTweet("");
  };

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
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
    </Card>
  );
}
