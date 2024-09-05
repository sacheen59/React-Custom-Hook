import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";
import TodoPage from "./pages/TodoPage";
import AlbumPage from "./pages/AlbumPage";
import UserPage from "./pages/UserPage";
import PhotoPage from "./pages/PhotoPage";
import CommentPage from "./pages/CommentPage";

const App = () => {
  return (
    <Router>
      <div className="max-w-[90%] m-auto">
        <Navbar />
        <Routes>
          <Route path="/" Component={UserPage} />
          <Route path="/posts" Component={PostPage} />
          <Route path="/todos" Component={TodoPage} />
          <Route path="/albums" Component={AlbumPage} />
          <Route path="/photos" Component={PhotoPage} />
          <Route path="/comments" Component={CommentPage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
