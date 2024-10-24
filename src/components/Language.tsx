// import home from '../img/3d-house.png';
import '../css/languages.css';
import '../App.css';

export default function Language() {
  return (
    <div className='card-container'>
      <div className='card-title'>
        <h1>Languages</h1>
      </div>

      <div className='language-info-container'>
        <span className='bold'>Ukrainian</span>
        <span>Native</span>
      </div>
      <div className='language-info-container'>
        <span className='bold'>English</span>
        <span>Advanced (C1)</span>
      </div>
      <div className='language-info-container'>
        <span className='bold'>Polish</span>
        <span>Advanced (C1)</span>
      </div>
      <div className='language-info-container'>
        <span className='bold'>German</span>
        <span>Pre-intermediate (B1)</span>
      </div>
    </div>
  );
}
