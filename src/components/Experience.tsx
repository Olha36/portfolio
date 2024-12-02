import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../css/experience.css';
import home from '../img/3d-house.png';
import Home from '../pages/Home';

export default function Experience() {
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
        <div className='experience-title title-container layout'>
          <h1>WORK EXPERIENCE</h1>
          <img src={home} alt='home icon' onClick={handleReturnClick} />
        </div>

        <div className='experience-container'>
          <div className='experience-coach'>
            <h2>Frontend coach</h2>
            <div className='flex'>
              <h3>GoIteens | remote</h3>
              <p>2022 – present</p>
            </div>

            <p>
              As a Frontend Coach, I specialize in delivering engaging and comprehensive lessons on HTML5, CSS3,
              JavaScript, Node.js, and React for children and teenagers. My approach includes:
            </p>
            <ul>
              <li>
                <span className='bold'>Blended Learning:</span>Combine theoretical explanations with practical coding
                demonstrations to foster a deep understanding of frontend technologies.
              </li>
              <li>
                <span className='bold'> Interactive Sessions:</span> Conduct each lesson with a focus on fundamental
                concepts, encouraging active participation through hands-on coding exercises that reinforce learning.
              </li>
              <li>
                <span className='bold'> Customized Curriculum:</span> Tailor lesson plans to accommodate different skill
                levels, ensuring that all participants can engage with the material effectively and build their
                confidence in coding.
              </li>
              <li>
                <span className='bold'> Resource Management:</span> Meticulously save and organize all lesson materials
                within the{' '}
                <a href='https://github.com/Olha36/goiteens-lessons.git' target='_blank'>
                  goIteens lessons repository
                </a>
                , providing participants with easy access for review and further study
              </li>
            </ul>
          </div>
          <div className='experience-freelance'>
            <h2>Freelance</h2>
            <div className='flex'>
              <h3>Self-employed | remote</h3>
              <p>2022 - present</p>
            </div>
            <p>
              As a Freelance Software Engineer, I focus on creating high-quality, user-centric web applications using
              React and JavaScript. My key contributions include:
            </p>
            <ul>
              <li>
                <span className='bold'>React Development: </span> Design and develop dynamic landing pages and
                small-scale JavaScript projects, including interactive games and business web card websites, ensuring
                responsiveness and optimal performance.
              </li>
              <li>
                <span className='bold'>Client-Centric Solutions: </span>Collaborate closely with diverse clients to
                gather requirements and deliver tailored solutions that meet their specific needs, enhancing user
                experience and satisfaction.
              </li>
              <li>
                <span className='bold'> Innovative Project Management: </span> Lead the development of a{' '}
                <a href='https://olha36.github.io/diploma-ui/' target='_blank'>
                  collaborative program
                </a>{' '}
                aimed at improving the quality of Bachelor's and Master's theses at universities by streamlining the
                thesis-checking process.
              </li>
            </ul>
          </div>
          <div className='experience-tutor'>
            <h2>English tutor</h2>
            <div className='flex'>
              <h3>Tutor | remote</h3>
              <p>2016 - present</p>
            </div>
            <p>
              As an experienced English Tutor, I focus on providing personalized learning experiences for students
              ensuring language growth across proficiency levels. My key contributions include:
            </p>
            <ul>
              <li>
                <span className='bold'>Tailored Methodologies: </span> Implement a variety of teaching methods and
                strategies designed to meet the individual learning styles and needs of each student, ensuring
                engagement and progress.
              </li>
              <li>
                <span className='bold'> Comprehensive Curriculum: </span> Develop and deliver a well-rounded curriculum
                that covers essential areas such as grammar, vocabulary, spelling, reading, and listening exercises,
                supporting learners from A1 to B2 proficiency levels.
              </li>
              <li>
                <span className='bold'> Skill Development: </span> Foster students' language skills through interactive
                and practical exercises, promoting confidence in both written and spoken English.
              </li>
              <li>
                <span className='bold'> Progress Tracking: </span> Continuously assess and track student progress,
                providing constructive feedback and adapting lesson plans to facilitate ongoing improvement.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
