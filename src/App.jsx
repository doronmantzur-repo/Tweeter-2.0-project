import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./auth/AuthProvider";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import Home from "./components/Home.jsx";
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/pages/ProfilePage" element={<ProfilePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </MantineProvider>
  );
}
