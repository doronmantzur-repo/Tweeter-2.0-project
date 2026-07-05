import Tweet from "./Tweet";

export default function TweetList({ tweets }) {
  return tweets.map((t) => (
    <Tweet
      key={t.id}
      id={t.id}
      date={t.date}
      user={t.userName}
      text={t.content}
    />
  ));
}
