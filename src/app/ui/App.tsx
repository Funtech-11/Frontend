import { Outlet } from 'react-router-dom';
import style from './App.module.scss';

const App = () => (
  <div className={style.app}>
    <Outlet />
  </div>
);

export default App;
