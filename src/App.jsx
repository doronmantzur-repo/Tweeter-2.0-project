import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Home from "./components/Home.jsx";
// import ContactDetailsPage from "./ContactDetailsPage.jsx";
// import NotFoundPage from "./NotFoundPage.jsx";
const user = {
    name: "Doron",
    username: "doron_dev",
    avatar: "https://i.pravatar.cc/150?img=3",
    bio: "Building Tweeter 2.0",
    followers: 120,
    following: 80,
  };
export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/pages/ProfilePage" element={<ProfilePage user={user} />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
