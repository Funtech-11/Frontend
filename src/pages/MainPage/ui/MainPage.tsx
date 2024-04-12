import React, { useState } from 'react';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';
import { Chips } from 'src/widgets/Chips';
import { Card } from 'src/widgets/Card';
import { Banner } from 'src/widgets/Banner';
import { Button } from 'src/entities/Button';
import { Footer } from 'src/widgets/Footer';
import style from './MainPage.module.scss';

import { mockThemes, mockCards } from 'src/utils/mocks';

const MainPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />
      <div className={style.main}>
        <div className={style.filterBlock}>
          <Chips labels={mockThemes} />
        </div>
        <ul className={style.cards}>
          {mockCards.map((card, index) => {
            return (
              <React.Fragment key={index}>
                {index === 9 && <Banner />}
                <li>
                  <Card event={card} />
                </li>
              </React.Fragment>
            );
          })}
        </ul>
        <div className={style.moreContentBlock}>
          <Button title="Ещё" hasIcon={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
