
import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/homePage';
import SkillsPage from './components/skillsPage';
import projectsPage from './components/projectsPage';
import { ThemeProvider } from './context/darkModeContext';
import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';
// import { useEffect } from 'react';

function App() {

        
  return (
    <>
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
      <div>
        <FacebookShareButton quote="Let's work together and craft a web solution that drives growth for your business." url={'https://tejucodes.site'}>
          <FacebookIcon>
            <img src='https://example.com/custom-icon.png' />
          </FacebookIcon>
        </FacebookShareButton>
      </div>
    </>
  );
}

export default App;

const App = () => (
);