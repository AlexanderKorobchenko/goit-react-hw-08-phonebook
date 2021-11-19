import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import s from './Header.module.css';

function Header({ children }) {
  return (
    <header className={s.header}>
      {children}
      <NavLink to="/contacts" className={s.link} activeClassName={s.current}>
        <ContactPhoneIcon />
        <span className={s.text}>Contacts</span>
      </NavLink>
      <div>
        <NavLink to="/login" className={s.link} activeClassName={s.current}>
          <LoginIcon />
          <span className={s.text}>Log in</span>
        </NavLink>
        <NavLink to="/signup" className={s.link} activeClassName={s.current}>
          <PersonAddIcon />
          <span className={s.text}>Sign up</span>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
