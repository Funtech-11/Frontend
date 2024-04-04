import { Footer } from 'src/widgets/Footer';
import { Header } from 'src/widgets/Header';

import style from './MainPage.module.scss';

const MainPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.main}>
        <div className={style.contentContainer}>MainPage</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
