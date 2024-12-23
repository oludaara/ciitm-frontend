import React from "react";
import Body from "./Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/About";
import Landing from "./pages/Home";
import Student from "./pages/Student";
const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/student" element={<Student />}></Route>
          </Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
