import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {

  return (
    <div className="footer">
      <footer>
        <p>Developed by @DimyLeo</p>
        <div className='redes'>
          <a href='https://github.com/DimyLeo' target='_blank'><FaGithub className='icons'/></a>
          <a href='https://www.linkedin.com/in/leo-cavalcante-primo/' target='_blank'><FaLinkedin className='icons'/></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
