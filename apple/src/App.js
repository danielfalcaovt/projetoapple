import { Route, BrowserRouter, Routes } from "react-router-dom";
import Root from "./Root";
import React from "react";
import Main from "./components/Main";
import About from "./components/About";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route  path="/" Component={Root}>
          <Route path="/" element={<Main/>}/>
          <Route path="home" element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    );
};