import { useNavigate } from 'react-router-dom';
import '../css/languages.css';
import home from '../img/3d-house.png';
import '../App.css';
import Home from '../pages/Home';

export default function Language() {
  const navigate = useNavigate();
  const handleReturnClick = () => {
    navigate('/home');
    return (
      <>
        <Home />
      </>
    );
  };
  return (
    <div className='card-container'>
      <div className='language-title title-container'>
        <h1>Languages</h1>
        <img src={home} alt='home icon' onClick={handleReturnClick} />
      </div>

      <div className='language-info-container'>
        <span className='bold'>Ukrainian</span>
        <span>Native</span>
      </div>
      <div className='language-info-container'>
        <span className='bold'>English</span>
        <span>Advanced (C1)</span>
      </div>
      <div className='language-info-container'>
        <span className='bold'>Polish</span>
        <span>Advanced (C1)</span>
      </div>
      <div className='language-info-container'>
        <span className='bold'>German</span>
        <span>Pre-intermediate (B1)</span>
      </div>
    </div>
  );
}
