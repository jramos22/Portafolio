import React, { useEffect } from 'react'
import './sass/app.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Header from './components/Header';
import { MobileFooter } from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route path='/about' element={<AboutMe />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <MobileFooter />
    </>
  );
}

export default App;
