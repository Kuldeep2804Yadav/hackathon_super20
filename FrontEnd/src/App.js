import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import Exam from "./Pages/MCQ";
import { useSelector } from "react-redux";

function App() {
  const loginStatus = useSelector((state) => state.auth.loginStatus); // Corrected to islogin

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />

          {/* Redirect to home if logged in, otherwise show Auth */}
          <Route
            path="/auth"
            element={loginStatus ? <Navigate to="/home" /> : <Auth />}
          />

          

          {/* Protecting other pages */}
          <Route
            path="/test"
            element={loginStatus ? <Test /> : <Navigate to="/auth" />}
          />
          <Route
            path="/mcq"
            element={loginStatus ? <Exam /> : <Navigate to="/auth" />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
