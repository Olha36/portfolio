import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../css/education.css';
import home from '../img/3d-house.png';

export default function Education() {
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
    <div>
      <div className='card-container'>
        <div className='education-title title-container layout'>
          <h1>Education</h1>
          <img src={home} alt='home icon' onClick={handleReturnClick} />
        </div>

        <div className='info-software-education'>
          <div className='flex-group-group'>
            <h3>Zhytomyr State Polytechnic University</h3>
            <p>2022-2023</p>
          </div>
          <h4>Master of Software Engineering</h4>
          <p>Software engineering</p>
        </div>
        <div className='info-acting-education'>
          <div className='flex-group'>
            <h3>Cracow Singing and Acting College</h3>
            <p>2019-2021</p>
          </div>
          <h4>Bachelor of Arts</h4>
          <p>Actress, singer</p>
        </div>
        <div className='philology-education'>
          <div className='flex-group'>
            <h3>Zhytomyr State Ivan Franko University</h3>
            <p>2016-2020</p>
          </div>
          <h4>Bachelor of Philology</h4>
          <p>035. Philology. The Germanic languages and literature (including translation)</p>
        </div>
      </div>
    </div>
  );
}
