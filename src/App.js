
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/homePage';
import SkillsPage from './components/skillsPage';
import projectsPage from './components/projectsPage';
import { ThemeProvider } from './context/darkModeContext';
import React from 'react';

function App() {

        
  return (
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/skills" Component={SkillsPage}></Route>
            <Route path="/projects" Component={projectsPage}></Route>
            <Route path="/" Component={HomePage}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;