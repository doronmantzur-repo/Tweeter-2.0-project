import { Textarea, Button, Card, Paper } from "@mantine/core";
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import "./Home.css";

export default function Home({ user }) {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleTweet = () => {
    const dateTime = new Date();
    const newTweet = {
      id: Date.now(),
      text: tweetText,
      user: user,
      date: dateTime.toLocaleDateString(),
      time: dateTime.toLocaleTimeString()
    };
    const updatedTweets = [newTweet, ...tweets];

    setTweets(updatedTweets);
    setTweetText("");
    //localStorage.setItem("tweets", JSON.stringify(updatedTweets));
  };

  useEffect(() => {
    const savedTweets = localStorage.getItem("tweets");
    if (savedTweets) {
      //console.log(JSON.parse(savedTweets));
     // setTweets(JSON.parse(savedTweets));
    }
  }, []);

  return (
    <div className="tweet-form">
      <Paper shadow="md" p="lg" className="tweet-paper">
        <div style={{ position: "relative" }}>
          <Textarea
            placeholder="What you have in mind..."
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            minRows={3}
          />

          <Button
            mt="md"
            onClick={handleTweet}
            color="twitter"
            disabled={tweetText.length === 0 || tweetText.length > 5}
            style={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
            Tweet
          </Button>
        </div>
      </Paper>
      {tweets.map((t) => (
        <Tweet key={t.id} text={t.text} user={t.user} date={t.date} time={t.time} />
      ))}
    </div>
  );
}
