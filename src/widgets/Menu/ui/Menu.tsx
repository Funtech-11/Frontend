import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './Menu.module.scss';

type TMenuProps = {
  isShown: boolean;
};

const Menu: FC<TMenuProps> = ({ isShown = false }) => {
  return (
    <div className={`${style.menu} ${isShown && style.menuActive}`}>
      <ul className={style.list}>
        <NavLink to="/404" className={style.item}>
          Навигация
        </NavLink>
        <NavLink to="/404" className={style.item}>
          Участникам
        </NavLink>
        <NavLink to="/404" className={style.item}>
          Партнерам
        </NavLink>
      </ul>
    </div>
  );
};

export default Menu;
