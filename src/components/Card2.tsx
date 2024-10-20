import '../css/card.css';
import img1 from '../img/1_optimized.png';
export default function Card2() {
  return (
    <div>
      <div className='card'>
        <div className='card-header'></div>
        <div className='card-about'>
          <div className='about-left'>
            <h1>Olha Kucheruk</h1>
            <h3>Frontend developer</h3>
            <p>
              I am a passionate Software Engineer with a focus on frontend development and over 1.5 years of experience
              mentoring teenagers in web development. Proficient in three languages, I bring strong
              communication skills and a global perspective to my work. I am adept at creating dynamic, user-friendly
              web applications and thrive in collaborative environments where I can continue learning and growing. With
              a keen eye for design and a strong technical foundation, I am eager to contribute to innovative projects
              that make a real impact.
            </p>
          </div>
          <div className='pics'>
            <img src={img1} alt='' />
          </div>
          <div className='about-right'>
            <h2>ABOUT ME</h2>
            <div className='welcome'>
              <div className='welcome-top'></div>
              <p>Welcome</p>
              <div className='welcome-bottom'></div>
            </div>
          </div>
        </div>

        <div className='info-container'>
          <div className='info'>
            <div className='experience'>experience</div>
            <div className='education'>education</div>
            <div className='languages'>languages</div>
            <div className='tech-skills'>tech-skills</div>
            <div className='soft-skills'>soft-skills</div>
            <div className='certifications'>certifications</div>
          </div>
          <div className='recommendations'></div>
        </div>
      </div>
    </div>
  );
}
