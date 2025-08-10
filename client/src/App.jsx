import React from "react";
import { Chatroom } from "./component/chatRoom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
    </Router>
  );
}

export default App;