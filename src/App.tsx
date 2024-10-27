import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ExperienceC from './pages/Experience';
import Language from './components/Language';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './pages/Projects';
import Certification from './components/Certification';
import References from './components/References';

function App() {
  return (
    <>
      <div>
      <HashRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/experience' element={<ExperienceC />} />
            <Route path='/languages' element={<Language />} />
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certifications' element={<Certification />} />
            <Route path='/references' element={<References />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;