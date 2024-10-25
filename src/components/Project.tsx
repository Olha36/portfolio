import { useNavigate } from 'react-router-dom';
import '../css/project.css';
import '../App.css';
import home from '../img/3d-house.png';
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
    <div className='language-title'>
      <h1>Projects</h1>
      <img src={home} alt='home icon' onClick={handleReturnClick} />
    </div>

    <div className='projects-grid'>
      <div className='project-card'>
        <h2>Guess the Number Game</h2>
        <div className='project-links'>
          <a href='https://olha36.github.io/Guess-the-number-game/' target='_blank' rel='noopener noreferrer'>
            View Project
          </a>
          <a href='https://github.com/Olha36/Guess-the-number-game' target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </div>
      </div>

      <div className='project-card'>
        <h2>Country Search</h2>
        <div className='project-links'>
          <a href='https://olha36.github.io/country-search/' target='_blank' rel='noopener noreferrer'>
            View Project
          </a>
          <a href='https://github.com/Olha36/country-search' target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </div>
      </div>

      <div className='project-card'>
        <h2>Blog Posts</h2>
        <div className='project-links'>
          <a href='https://mini-project-blog-posts.onrender.com/' target='_blank' rel='noopener noreferrer'>
            View Project
          </a>
          <a href='https://github.com/Olha36/mini-project-blog-posts' target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </div>
      </div>

      <div className='project-card'>
        <h2>Games Collection</h2>
        <div className='project-links'>
          <a href='https://olha36.github.io/games/' target='_blank' rel='noopener noreferrer'>
            View Project
          </a>
          <a href='https://github.com/Olha36/games' target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </div>
      </div>

      <div className='project-card'>
        <h2>Diploma Work Verification</h2>
        <div className='project-links'>
          <a href='https://olha36.github.io/diploma-ui/' target='_blank' rel='noopener noreferrer'>
            View Project
          </a>
          <a href='https://github.com/Olha36/diploma-ui.git' target='_blank' rel='noopener noreferrer'>
            View Code
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
