import home from '../img/3d-house.png';
export default function Education() {
  return (
    <div>
      <div className='card-container'>
        <div className='card-title'>
          <h1>Education</h1>
          <img src={home} alt='home icon' />
        </div>

        <div className='info-container'>
          <div className='info-software-education'>
            <div className='flex'>
              <h3>Zhytomyr State Polytechnic University</h3>
              <p>2022-2023</p>
            </div>
            <h4>Master of software engineering</h4>
            <p>Software engineering</p>
          </div>
          <div className='info-acting-education'>
            <div className='flex'>
              <h3>Cracow singing and acting college</h3>
              <p>2019-2021</p>
            </div>
            <h4>Bachelor of arts</h4>
            <p>Actress, singer</p>
          </div>
          <div className='philology-education'>
            <div className='flex'>
              <h3>Zhytomyr State Ivan Franko University</h3>
              <p>2016-2020</p>
            </div>
            <h4>Bachelor of philology</h4>
            <p>035. Philology. The Germanic languages and literature (including translation)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
