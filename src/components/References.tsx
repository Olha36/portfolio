import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../css/references.css';
import home from '../img/3d-house.png';
import ctkLogistics from '../img/references/ctk.jpg';
import highFive from '../img/references/high-five.jpg';
import Home from '../pages/Home';

export default function References() {
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
      <div className='references-title title-container'>
        <h1>References</h1>
        <img src={home} alt='home icon' onClick={handleReturnClick} />
      </div>

      <div className='certification-grid'>
        <div className='certification-card'>
          <img src={ctkLogistics} alt='ctk logistics' />
        </div>
        <div className='certification-card'>
          <img src={highFive} alt='high five' />
        </div>
      </div>
    </div>
  );
}
