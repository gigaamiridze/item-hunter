import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PIXI from 'pixi.js';
import { root } from '../main.tsx';
import { movePlayer, incrementScore, selectPlayerState } from '../features';

function PixiGame() {
  const playerState = useSelector(selectPlayerState);
  const dispatch = useDispatch();

  useEffect(() => {
    const app = new PIXI.Application({ width: 800, height: 500 });

    if (root) {
      root.appendChild(app.view as HTMLCanvasElement);
    }

    const player = PIXI.Sprite.from('../images/player.png');
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2 - 100;
    app.stage.addChild(player);

    const item = PIXI.Sprite.from('../images/item.png');
    item.x = app.view.width / 2;
    item.y = app.view.height / 2 + 100;
    item.width = 100;
    item.height = 100;
    item.interactive = true;
    item.on('click', () => dispatch(incrementScore()));
    app.stage.addChild(item);

    const handleKeyDown = (event: KeyboardEvent) => {
      const speed = 5;
      const { key } = event;

      switch (key) {
        case 'ArrowUp':
          return dispatch(movePlayer({ x: playerState.x, y: playerState.y - speed }));
        case 'ArrowDown':
          return dispatch(movePlayer({ x: playerState.x, y: playerState.y + speed }));
        case 'ArrowLeft':
          return dispatch(movePlayer({ x: playerState.x - speed, y: playerState.y }));
        case 'ArrowRight':
          return dispatch(movePlayer({ x: playerState.x + speed, y: playerState.y }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      app.destroy();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return null;
}

export default PixiGame;
