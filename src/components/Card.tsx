import { useNavigate } from 'react-router-dom';
import '../css/card.css';
import img1 from '../img/1_optimized.png';
import certificate from '../img/avatar-icons/certificate.png';
import education from '../img/avatar-icons/education.png';
import experience from '../img/avatar-icons/experience.png';
import languages from '../img/avatar-icons/language.png';
import softSkills from '../img/avatar-icons/soft-skills.png';
import techSkills from '../img/avatar-icons/tech-skills.png';
import Experience from './Experience';
import Language from './Language';
import Education from './Education';
import Projects from '../pages/Projects';
import Skills from './Skills';
import Certifications from '../pages/Ceritications';
import References from './References';

export default function Card() {
  const navigate = useNavigate();
  const handleExperienceClick = () => {
    navigate('/experience');
    return (
      <>
        <Experience />
      </>
    );
  };

  const handleLanguageClick = () => {
    navigate('/languages');
    return (
      <>
        <Language />
      </>
    );
  };

  const handleProjectsClick = () => {
    navigate('/projects');
    return (
      <>
        <Projects />
      </>
    );
  };

  const handleEducationClick = () => {
    navigate('/education');
    return (
      <>
        <Education />
      </>
    );
  };

  const handleSkillsClick = () => {
    navigate('/skills');
    return (
      <>
        <Skills />
      </>
    );
  };

  const handleCertificationClick = () => {
    navigate('/certifications');
    return (
      <>
        <Certifications />
      </>
    );
  };

  const handleReferencesClick = () => {
    navigate('/references');
    return (
      <>
        <References />
      </>
    );
  };


  return (
    <div>
      <div className='card-container'>
        <div className='card-header'></div>
        <div className='card-title title-container'>
          <div className='about-left'>
            <h3>Frontend developer</h3>
            <p className='description'>
              I am a Software Engineer with 1.5 years of experience mentoring teens in web development and a proven
              ability to build dynamic, user-friendly applications. Fluent in three languages, I bring strong
              communication and a global perspective to every project. With a sharp eye for design and solid technical
              skills, I thrive in collaborative environments and am eager to drive innovation in impactful projects.
            </p>
            <button className='button button-pink' onClick={handleReferencesClick}>References</button>
          </div>
          <div className='about-right'>
            <h3>OLHA KUCHERUK</h3>
            <div className='pics'>
              <img src={img1} alt='' />
            </div>
            <div className='welcome'>
              <div className='welcome-top'></div>
              <p>Welcome</p>
              <div className='welcome-bottom'></div>
            </div>
          </div>
        </div>

        <div className='info-container'>
          <div className='info'>
            <div className='info-left'>
              <div className='experience grid'>
                <img src={experience} alt='' />
                <button className='button button-pink' onClick={handleExperienceClick}>
                  experience
                </button>
              </div>
              <div className='education grid'>
                <img src={education} alt='' />
                <button className='button button-pink' onClick={handleEducationClick}>education</button>
              </div>
            </div>
            <div className='info-center'>
              <div className='languages grid'>
                <img src={languages} alt='' />
                <button className='button button-white' onClick={handleLanguageClick}>languages</button>
              </div>
              <div className='tech-skills grid'>
                <img src={techSkills} alt='' />
                <button className='button button-white' onClick={handleSkillsClick}>tech/soft skills</button>
              </div>
            </div>
            <div className='info-right'>
              <div className='soft-skills grid'>
                <img src={softSkills} alt='' />
                <button className='button button-pink' onClick={handleProjectsClick}>projects</button>
              </div>
              <div className='certifications grid'>
                <img src={certificate} alt='' />
                <button className='button button-pink' onClick={handleCertificationClick}>certification</button>
              </div>
            </div>
          </div>
          <div className='recommendations'></div>
        </div>
      </div>
    </div>
  );
}
