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

    const item = PIXI.Sprite.from('../images/item.png');
    item.x = app.view.width / 2;
    item.y = app.view.height / 2 + 100;
    item.width = 100;
    item.height = 100;
    item.interactive = true;
    app.stage.addChild(item);
  }, []);

  return null;
}

export default PixiGame;
