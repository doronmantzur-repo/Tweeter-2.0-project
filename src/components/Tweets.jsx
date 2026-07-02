import { Textarea, Paper } from "@mantine/core";
import { useState } from "react";
import Tweet from "./Tweet";
import "./Tweets.css";

export default function Tweets({ Tweet }) {
  const [tweetsArr, setTweets] = useState([]);
  setTweets([...tweetsArr, Tweet]);

  return tweetsArr.map((tweet, index) => {
    <Tweet key={index} text={tweet} />;
  });
}
