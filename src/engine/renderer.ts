import { World } from '../world/world';
import { Player } from '../entities/player';

export class Renderer {
  private ctx: CanvasRenderingContext2D;

  constructor(private canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error("Canvas 2D context not found.");
    this.ctx = ctx;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  renderWorld(world: World, player: Player) {
    const blockSize = 32;
    for (let y = 0; y < world.height; y++) {
      for (let x = 0; x < world.width; x++) {
        const block = world.getBlock(x, y);
        if (block) {
          this.ctx.drawImage(
            block.sprite,
            x * blockSize,
            y * blockSize,
            blockSize,
            blockSize
          );
        }
      }
    }
  }

  renderPlayer(player: Player) {
    const blockSize = 32;
    this.ctx.drawImage(
      player.sprite,
      player.x * blockSize,
      player.y * blockSize,
      blockSize,
      blockSize
    );
  }
}