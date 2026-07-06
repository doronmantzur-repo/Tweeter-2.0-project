import { useState, useEffect } from "react";
import api from "../utils/axiosClient";

export default function useTweets(user) {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);

  function sortTweetsByDate(tweets) {
    return [...tweets].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  useEffect(() => {
    const fetchTweets = async () => {
      api
        .get("/tweeterPosts?select=*")
        .then((res) => {
          const sorted = sortTweetsByDate(res.data);
          setTweets(sorted);
        })
        .catch((err) => setError(err.response?.data))
        .finally(() => setLoading(false));
    };
    fetchTweets();
    const interval = setInterval(fetchTweets, 5000);
    return () => clearInterval(interval);
  }, []);


  const addTweet = async (content) => {
    setPosting(true);

    const newTweet = {
      content,
      userName: user,
      date: new Date().toISOString(),
    };
    console.log(newTweet);
    try {
      const res = await api.post("/tweeterPosts", newTweet, {
        headers: { Prefer: "return=representation" },
      });

      setTweets((prev) => [res.data[0], ...prev]);
    } catch (err) {
      setError(err.response?.data);
      {
        error && <Text color="red">{error.message}</Text>;
      }
    } finally {
      setPosting(false);
    }
  };
  return { tweets, loading, posting, error, addTweet };
}
