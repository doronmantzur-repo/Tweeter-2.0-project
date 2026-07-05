import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Home from "./components/Home.jsx";
// import ContactDetailsPage from "./ContactDetailsPage.jsx";
// import NotFoundPage from "./NotFoundPage.jsx";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <UserProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pages/ProfilePage" element={<ProfilePage  />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </MantineProvider>
  );
}
