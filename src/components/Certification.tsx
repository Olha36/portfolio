// import home from '../img/3d-house.png';
import '../App.css';
import '../css/certifications.css';
import home from '../img/3d-house.png';
import canva from '../img/certificates/canva.jpg';
import englishForNatives from '../img/certificates/English for natives.jpg';
import englishLevel from '../img/certificates/English level.jpg';
import gptChat from '../img/certificates/GPT chat.jpg';
import introductionToFrontend from '../img/certificates/introduction to front end development.jpg';
import jsAlgorithms from '../img/certificates/Javascript algorithms and data structure.jpg';
import jsZeroToHero from '../img/certificates/JS course from zero to hero.jpg';
import postman from '../img/certificates/postman and api testing for beginners.jpg';
import programmingWithJs from '../img/certificates/Programming with Javascript.jpg';
import responsiveWebDesign from '../img/certificates/responsive web design.jpg';
import typescript from '../img/certificates/typescript for professionals.jpg';

export default function Certification() {
  return (
    <div className='certification-container'>
      <div className='certification-title'>
        <h1>Certifications</h1>
        <img src={home} alt='home icon' />
      </div>

      <div className='certification-grid'>
        <div className='certification-card'>
          <img src={jsZeroToHero} alt='JS course from zero to hero' />
        </div>
        <div className='certification-card'>
          <img src={programmingWithJs} alt='programming with Js' />
        </div>
        <div className='certification-card'>
          <img src={postman} alt='postman' />
        </div>

        <div className='certification-card'>
          <img src={typescript} alt='typescript' />
        </div>

        <div className='certification-card'>
          <img src={englishForNatives} alt='English for Natives' />
        </div>

        <div className='certification-card'>
          <img src={englishLevel} alt='English level' />
        </div>

        <div className='certification-card'>
          <img src={gptChat} alt='gpt chat' />
        </div>
        <div className='certification-card'>
          <img src={introductionToFrontend} alt='introduction to frontend' />
        </div>

        <div className='certification-card'>
          <img src={jsAlgorithms} alt='jsAlgorithms' />
        </div>

        <div className='certification-card'>
          <img src={responsiveWebDesign} alt='responsive web design' />
        </div>
        <div className='certification-card'>
          <img src={canva} alt='canva' />
        </div>
      </div>
    </div>
  );
}
