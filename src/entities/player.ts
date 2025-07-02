import { Input } from '../engine/input';
import { World } from '../world/world';

export class Player {
  x: number;
  y: number;
  sprite: HTMLImageElement;

  constructor(
    x: number,
    y: number,
    private input: Input,
    private world: World
  ) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = 'assets/player/idle.png';
  }

  update(_delta: number) {
    let dx = 0, dy = 0;
    if (this.input.isDown('w')) dy -= 1;
    if (this.input.isDown('s')) dy += 1;
    if (this.input.isDown('a')) dx -= 1;
    if (this.input.isDown('d')) dx += 1;
    // Collision check
    if (this.world.getBlock(this.x + dx, this.y + dy)?.isBreakable() === false) {
      this.x += dx;
      this.y += dy;
    }
    // Animation update can be added here
  }
}