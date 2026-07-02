import Profile from "../components/Profile";

export default function ProfilePage({user}) {
  

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "20px" }}>
      <Profile user={user} />
    </div>
  );
}
