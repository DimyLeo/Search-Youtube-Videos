import { NavLink } from 'react-router-dom';
import icon from '../../images/icon-maior.svg';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      <img src={icon} alt="icon" />
      <div className='links'>
        <NavLink to="/search">Search</NavLink>
      </div>
    </header>
  )
}

export default Header;
