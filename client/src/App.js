import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/LandingPage/Pages/Home";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ErrorPage from "./components/Error/ErrorPage";
import Contact from "./components/LandingPage/Pages/Contact";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Setauthtoken from "./components/Setauthtoken";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Notes from "./components/Notes/Notes";
import History from "./components/History/History";

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 3000,
    });
  }, []);

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Notes />} />
                <Route path="/history" element={<History />} />
                <Route path="/login" element={<Login />} />

                <Route
                  path="/setauthtoken/:authtoken"
                  element={<Setauthtoken />}
                />
              </Routes>
            </Router>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
