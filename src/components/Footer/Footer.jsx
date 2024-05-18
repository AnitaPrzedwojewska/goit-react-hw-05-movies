import css from './Footer.module.css';

export const Footer = () => {
  return (
    <>
      <div className={css.footer}>
        <p>© 2024 Anita Przedwojewska - All rights reserved</p>
        <p>Powered by React</p>
      </div>
    </>
  );
}