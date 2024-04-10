import { useState } from 'react';
import { Header } from 'src/widgets/Header';
// import { Menu } from 'src/widgets/Menu';
import { Chips } from 'src/widgets/Chips';
import { Card } from 'src/widgets/Card';
import { Button } from 'src/entities/Button';
import { Footer } from 'src/widgets/Footer';
import style from './MainPage.module.scss';

import { mockThemes, mockCards } from 'src/utils/mocks';

const MainPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <div className={style.contentContainer}>
          <Chips labels={mockThemes} />
        </div>
        <ul className={style.cards}>
          {mockCards.map((card, index) => {
            return (
              <li key={index}>
                <Card event={card} />
              </li>
            );
          })}
        </ul>
        <div className={style.contentContainer}>
          <Button title="Ещё" hasIcon={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
