import '../App.css';
import '../css/experience.css';
export default function Experience() {
  return (
    <div>
      <div className='frame'>
        <h1>WORK EXPERIENCE</h1>
      </div>

      <div className='info-container'>
        <div className='experience-logistics'>
          <h2>Planner assistant</h2>
          <div className='flex'>
            <h3>CTK Logistics | Konin, Poland</h3>
            <p>March 2024 - present</p>
          </div>
          <p>
            As a Planning Assistant, I played a pivotal role in streamlining logistics operations by effectively
            managing and optimizing order processing. My responsibilities included:
          </p>
          <ul>
            <li>
              <span className='bold'>Order Management:</span> Efficiently received and inputted orders from planners
              into the logistics management system, ensuring data accuracy and timely processing.
            </li>
            <li>
              <span className='bold'>Transport Coordination: </span> Oversaw the management of transport orders from
              various platforms, facilitating seamless communication and collaboration between stakeholders.
            </li>
            <li>
              <span className='bold'>Scheduling: </span> Scheduled and optimized loading and unloading slots to enhance
              operational efficiency and reduce turnaround times.
            </li>
            <li>
              <span className='bold'>Client Communication: </span> Actively engaged with clients to address inquiries
              and resolve issues, ensuring a high level of service and satisfaction.
            </li>
            <li>
              <span className='bold'>Order Verification: </span> Conducted thorough verification of orders in the
              system, ensuring compliance with operational standards and minimizing discrepancies.
            </li>
          </ul>
        </div>

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
              levels, ensuring that all participants can engage with the material effectively and build their confidence
              in coding.
            </li>
            <li>
              <span className='bold'> Resource Management:</span> Meticulously save and organize all lesson materials
              within the goIteens lessons repository, providing participants with easy access for review and further
              study
            </li>
          </ul>
        </div>
        <div className='experience-freelance'>
          <h2>Freelance</h2>
          <div className='flex'>
            <h3>self-employed | remote</h3>
            <p>2022 - present</p>
          </div>
          <p>
            As a Freelance Software Engineer, I focused on creating high-quality, user-centric web applications using
            React and JavaScript. My key contributions include:
          </p>
          <ul>
            <li>
              <span className='bold'>React Development: </span> Designed and developed dynamic landing pages and
              small-scale JavaScript projects, including interactive games and business web card websites, ensuring
              responsiveness and optimal performance.
            </li>
            <li>
              <span className='bold'>Client-Centric Solutions: </span>Collaborated closely with diverse clients to
              gather requirements and deliver tailored solutions that meet their specific needs, enhancing user
              experience and satisfaction.
            </li>
            <li>
              <span className='bold'> Innovative Project Management: </span> Led the development of a collaborative
              program aimed at improving the quality of Bachelor's and Master's theses at universities by streamlining
              the thesis-checking process.
            </li>
          </ul>
        </div>
        <div className='experience-tutor'>
        <h2>English tutor</h2>
          <div className='flex'>
            <h3>Entrepreneur | remote</h3>
            <p>2016 - present</p>
          </div>
          <p></p>
          <ul>
            <li>
              <span className='bold'>Tailored Methodologies: </span> Implement a variety of teaching methods and
              strategies designed to meet the individual learning styles and needs of each student, ensuring engagement
              and progress.
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
  );
}
