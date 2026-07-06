import { Textarea, Button, Paper } from "@mantine/core";

export default function TweetPage({
  tweetText,
  setTweetText,
  posting,
  onTweet,
}) {
  return (
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
          onClick={onTweet}
          color="twitter"
          disabled={posting || tweetText.length === 0 || tweetText.length > 140}
          style={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            zIndex: 10,
          }}
        >
          {posting ? "Posting..." : "Tweet"}
        </Button>
      </div>
    </Paper>
  );
}
