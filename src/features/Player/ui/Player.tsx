import { useEffect } from 'react';

type TPlayer = {
  width?: number;
  height?: number;
  videoId?: string;
  playerVars?: object;
  events?: object;
};

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (id: string, player: TPlayer) => TPlayer;
      PlayerState: object;
      get: () => void;
      loaded: number;
      loading: number;
      ready: () => void;
      scan: () => void;
      setConfig: () => void;
      subscribe: () => void;
      unsubscribe: () => void;
    };
  }
}

const Player = () => {
  const id = 'PMYdcJSJHuU';
  let player;

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      window.onYouTubeIframeAPIReady = loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode!.insertBefore(tag, firstScriptTag);
    } else {
      loadVideo();
    }
  }, []);

  const loadVideo = () => {
    player = new window.YT!.Player('player', {
      width: 871,
      height: 720,
      videoId: id,
      events: {
        onReady: onPlayerReady,
      },
    });
  };

  const onPlayerReady = (event: any) => {
    event.target.playVideo();
  };

  return <div id="player"></div>;
};

export default Player;
