import { Logo } from '../Logo/Logo';
import css from './Header.module.css';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
    </header>
  );
}