import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "@/pages/Login";
import Gallery from "@/pages/Gallery";
import Profile from "@/pages/Profile";
import Friends from "@/pages/Friends";
import AlbumDetail from "@/pages/AlbumDetail";
import Home from "@/pages/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/albums/:id" element={<AlbumDetail />} />
      </Route>
    </Routes>
  );
}