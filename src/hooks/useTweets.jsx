import { useState, useEffect, useRef } from "react";
import { supabase } from "../utils/supabaseClient";
import axios from "axios";

import { createApiClient } from "../utils/axiosClient";

export default function useTweets(user) {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState(null);
  const apiRef = useRef(null);

  function sortTweetsByDate(tweets) {
    return [...tweets].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  useEffect(() => {
    const fetchTweets = async () => {
      apiRef.current = await createApiClient();
      const api = apiRef.current;
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
      userName: user.email,
      date: new Date().toISOString(),
    };
    try {
       const api = apiRef.current;

      const res = await api.post("/tweeterPosts", newTweet, {
        headers: { Prefer: "return=representation" },
      });

      setTweets((prev) => [res.data[0], ...prev]);
    } catch (err) {
      setError(err.response?.data);
    } finally {
      setPosting(false);
    }
  };
  return { tweets, loading, posting, error, addTweet };
}
