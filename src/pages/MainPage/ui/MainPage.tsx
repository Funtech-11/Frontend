import { Footer } from 'src/widgets/Footer';
import { Header } from 'src/widgets/Header';
import style from './MainPage.module.scss';

import { mockThemes, mockCards } from 'src/utils/mocks';
import Chips from 'src/widgets/Chips/ui/Chips';
import { Card } from 'src/widgets/Card';

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
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
