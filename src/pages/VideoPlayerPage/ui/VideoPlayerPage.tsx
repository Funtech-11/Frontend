import { useState } from 'react';
import { Header } from 'src/widgets/Header';
import { Menu } from 'src/widgets/Menu';

import style from './VideoPlayerPage.module.scss';

const VideoPlayerPage = () => {
  const [isMenuShown, setMenuShown] = useState(false);

  return (
    <div className={style.layout}>
      <Header isMenuShown={isMenuShown} setMenuShown={setMenuShown} />
      <Menu isShown={isMenuShown} />

      <div className={style.main}></div>
    </div>
  );
};

export default VideoPlayerPage;
