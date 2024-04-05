import style from './Header.module.scss';

const Header = () => (
  <header className={style.header}>
    <h1 className={style.title}>Яндекс. Ивенты</h1>
    <div>Avatar</div>
  </header>
);

export default Header;
