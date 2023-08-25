import { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { root } from '../main.tsx';

function PixiGame() {
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
  }, []);

  return null;
}

export default PixiGame;
