import '../css/header.css';
import gitHib from '../img/socials/github.png';
import linkedIn from '../img/socials/linkedin.png';
import telegram from '../img/socials/telegram.png';

export default function Header() {
  return (
    <header>
      <nav>
        <a href='https://www.linkedin.com/in/olha-kucheruk-62b3ab217/' target='_blank'>
          <img src={linkedIn} alt='' />
        </a>
        <a href='https://github.com/Olha36' target='_blank'>
          <img src={gitHib} alt='' />
        </a>

        <a href='https://t.me/olha_kucheruk' target='_blank'>
          <img src={telegram} alt='' />
        </a>
      </nav>
    </header>
  );
}
