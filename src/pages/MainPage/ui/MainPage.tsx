import { Footer } from 'src/widgets/Footer';
import style from './MainPage.module.scss';

const MainPage = () => {
  console.log('hello linter');
  return (
    <div className={style.layout}>
      <div className={style.main}>
        <div className={style.contentContainer}>MainPage</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
