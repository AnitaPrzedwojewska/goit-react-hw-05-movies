// import { Outled } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import css from './Header.module.css';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <div className={css.header}>
      <Logo />
      <Navigation />
    </div>
  );
}