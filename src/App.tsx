import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ExperienceC from './pages/Experience';
import Language from './components/Language';
import Education from './components/Education';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/experience' element={<ExperienceC />} />
            <Route path='/languages' element={<Language />} />
            <Route path='/education' element={<Education />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;