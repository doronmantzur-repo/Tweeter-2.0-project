import { useState } from "react";
import useTweets from "../hooks/useTweets";
import TweetPage from "../pages/TweetPage";
import TweetList from "./TweetList";
import { useAuth } from "../auth/AuthProvider";

export default function Home() {
  const [tweetText, setTweetText] = useState("");
  const {  activeUser, onLogin, onLogout} = useAuth();
  const { tweets, loading, posting, error, addTweet } = useTweets(activeUser);

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
