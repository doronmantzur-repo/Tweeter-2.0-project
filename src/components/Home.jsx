import { useState } from "react";
import useTweets from "../hooks/useTweets";
import TweetPage from "../pages/TweetPage";
import TweetList from "./TweetList";
import useProfile from "../hooks/useProfile";
import { useUser } from "../context/UserContext";

export default function Home() {
  const [tweetText, setTweetText] = useState("");
  const { userName } = useUser();
  //console.log("user:", userName);
  const { tweets, loading, posting, error, addTweet } = useTweets(userName);

  const handleTweet = () => {
    addTweet(tweetText);
    setTweetText("");
  };

  return (
    <div className="tweet-form">
      <TweetPage
        tweetText={tweetText}
        setTweetText={setTweetText}
        posting={posting}
        onTweet={handleTweet}
      />

      {loading && <div>Loading tweets...</div>}
      {error && <div className="error">{error}</div>}

      <TweetList tweets={tweets} />
    </div>
  );
}
