import '../css/card.css';
import img1 from '../img/1_optimized.png';
import certificate from '../img/avatar-icons/certificate.png';
import education from '../img/avatar-icons/education.png';
import experience from '../img/avatar-icons/experience.png';
import languages from '../img/avatar-icons/language.png';
import softSkills from '../img/avatar-icons/soft-skills.png';
import techSkills from '../img/avatar-icons/tech-skills.png';

export default function Card() {
  return (
    <div>
      <div className='card frame'>
        <div className='card-header'></div>
        <div className='card-about'>
          <div className='about-left'>
            <h3>Frontend developer</h3>
            <p className='description'>
              I am a Software Engineer with 1.5 years of experience mentoring teens in web development and a proven
              ability to build dynamic, user-friendly applications. Fluent in three languages, I bring strong
              communication and a global perspective to every project. With a sharp eye for design and solid technical
              skills, I thrive in collaborative environments and am eager to drive innovation in impactful projects.
            </p>
            <button className='button button-pink'>References</button>
          </div>
          {/* <div className='pics'>
            <img src={img1} alt='' />
          </div> */}
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
                <button className='button button-pink'>experience</button>
              </div>
              <div className='education grid'>
                <img src={education} alt='' />
                <button className='button button-pink'>education</button>
              </div>
            </div>
            <div className='info-center'>
              <div className='languages grid'>
                <img src={languages} alt='' />
                <button className='button button-white'>languages</button>
              </div>
              <div className='tech-skills grid'>
                <img src={techSkills} alt='' />
                <button className='button button-white'>tech/soft skills</button>
              </div>
            </div>
            <div className='info-right'>
              <div className='soft-skills grid'>
                <img src={softSkills} alt='' />
                <button className='button button-pink'>projects</button>
              </div>
              <div className='certifications grid'>
                <img src={certificate} alt='' />
                <button className='button button-pink'>certification</button>
              </div>
            </div>
          </div>
          <div className='recommendations'></div>
        </div>
      </div>
    </div>
  );
}
