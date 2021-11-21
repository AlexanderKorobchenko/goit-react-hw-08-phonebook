import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Authorization from '../Authorization';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth';
import s from './Header.module.css';

function Header({ children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      {children}
      <NavLink to="/contacts" className={s.link} activeClassName={s.current}>
        <ContactPhoneIcon />
        <span className={s.text}>Contacts</span>
      </NavLink>
      {isLoggedIn ? <UserMenu name="Alex" /> : <Authorization />}
    </header>
  );
}

export default Header;
