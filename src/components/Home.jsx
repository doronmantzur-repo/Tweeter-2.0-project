import { Textarea, Button, Card, Paper } from "@mantine/core";
import { useState, useEffect } from "react";
import Tweet from "./Tweet";
import "./Home.css";
import axios from "axios";
import api from "../utils/axiosClient";

export default function Home({ user }) {
  const [tweetText, setTweetText] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleTweet = async () => {
    const dateTime = new Date();

    const newTweet = {

      date: dateTime.toISOString(),
      userName: user.name,
      content: tweetText,
    };
try{
    const res = await api.post("/Tweets", newTweet, {
      headers: { Prefer: "return=representation" },
    });

    setTweets((tweets) => [res.data[0], ...tweets]);
    setTweetText("");
  }
  catch(err){
    console.log("Supabase error:", err.response?.data);
  }
  };

  useEffect(() => {
    api.get("/Tweets?select=*").then((res) => {
      setTweets(res.data);
      console.log(res.data);
    });
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
        <Tweet id={t.id} date={t.date} user={t.userName} text={t.content} />
      ))}
    </div>
  );
}
