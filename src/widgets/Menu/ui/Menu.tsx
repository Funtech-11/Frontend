import type { FC } from 'react';
import style from './Menu.module.scss';

type TMenuProps = {
  isShown: boolean;
};

const Menu: FC<TMenuProps> = ({ isShown = false }) => {
  return (
    <div className={`${style.menu} ${isShown && style.menuActive}`}>
      <ul className={style.list}>
        <li className={style.item}>Навигация</li>
        <li className={style.item}>Участникам</li>
        <li className={style.item}>Партнерам</li>
      </ul>
    </div>
  );
};

export default Menu;
