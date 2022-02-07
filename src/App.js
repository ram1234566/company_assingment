import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Navbar from "./components/Navbar";
import Comments from "./components/Comments";
import EditPost from "./components/EditPost";
import EditComment from "./components/EditComment";
import "./App.css";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" component={CreatePost} />
      <Route exact path="/comments" component={Comments} />
      <Route exact path="/editPost" component={EditPost} />
      <Route exact path="/editComment" component={EditComment} />
    </Routes>
  </Router>
);

export default App;
