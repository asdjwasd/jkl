import { Game } from './engine/game';

window.onload = () => {
  const canvas = document.getElementById('game') as HTMLCanvasElement;
  if (!canvas) throw new Error("Game canvas not found.");
  const game = new Game(canvas);
  game.start();
};