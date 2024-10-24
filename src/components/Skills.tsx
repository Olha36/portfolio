import home from '../img/3d-house.png';
export default function Skills() {
  return (
    <div>
      <div className='card-container'>
        <div className='card-title'>
          <h1>SKILLS</h1>
          <img src={home} alt='home icon' />
        </div>

        <div className='info-container'>
          <div className='tech-skills'>
            <h2>Tech skills:</h2>
            <ul>
              <li>HTML</li>
              <li>CSS/SASS/SCSS</li>
              <li>JS/TS</li>
              <li>npm</li>
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>MUI</li>
              <li>Jira</li>
              <li>Postman</li>
              <li>Canva</li>
              <li>Figma</li>
              <li>Docker</li>
              <li>Azure</li>
              <li>Python</li>
            </ul>
          </div>
          <div className='soft-skills'>
            <h2>Soft skills:</h2>
            <ul>
              <li>
                <span className='bold'>Adaptability: </span> Passionate about learning new languages and programming
                technologies, demonstrating a strong ability to adapt to changing environments and tools.
              </li>
              <li>
                <span className='bold'> Communication Skills: </span> Proficient in five languages, facilitating
                effective communication and collaboration within diverse teams and with clients.
              </li>
              <li>
                <span className='bold'> Problem-Solving: </span> Patient and result-oriented, with a methodical approach
                to challenges, ensuring effective solutions in development and debugging processes.
              </li>
              <li>
                <span className='bold'> Teamwork: </span> Strong ability to work collaboratively in team settings,
                leveraging communication skills to foster cooperation and enhance project outcomes.
              </li>
              <li>
                <span className='bold'> Attention to Detail: </span> Committed to delivering high-quality work, with a
                keen eye for detail that ensures accuracy and excellence in coding and design.
              </li>
              <li>
                <span className='bold'> Time Management: </span> Effective in prioritizing tasks to meet deadlines while
                maintaining quality, demonstrating a strong focus on achieving results.
              </li>
              <li>
                <span className='bold'> Continuous Learning: </span> Enthusiastic about personal and professional
                growth, with a commitment to staying updated on the latest technologies and industry trends.
              </li>
              <li>
                <span className='bold'> Cultural Awareness: </span> Knowledge of multiple languages enhances
                understanding of diverse cultures, contributing to positive interactions in global teams.
              </li>
              <li>
                <span className='bold'> Customer Focus: </span> Patient and attentive to user needs, dedicated to
                developing user-friendly applications that enhance the overall user experience.
              </li>
              <li>
                <span className='bold'> Resilience: </span> Able to maintain persistence and a positive attitude when
                facing challenges, essential for success in the dynamic field of technology.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
