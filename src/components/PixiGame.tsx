import { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { root } from '../main.tsx';

function PixiGame() {
  useEffect(() => {
    const app = new PIXI.Application({ width: 800, height: 500 });

    if (root) {
      root.appendChild(app.view as HTMLCanvasElement);
    }
  }, []);

  return null;
}

export default PixiGame;
