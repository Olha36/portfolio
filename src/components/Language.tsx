import home from '../img/3d-house.png';
export default function Language() {
  return (
    <div>
      <div className='card-container'>
        <div className='card-title'>
          <h1>LANGUAGES</h1>
          <img src={home} alt='home icon' />
        </div>

        <div className='info-container'>
          <p>Ukrainian - Native</p>
          <p>English - Advanced (C1)</p>
          <p>Polish - Advanced (C1)</p>
          <p>German - Pe-intermediate (B1)</p>
        </div>
      </div>
    </div>
  );
}
