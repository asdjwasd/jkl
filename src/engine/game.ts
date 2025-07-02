import { Renderer } from './renderer';
import { Input } from './input';
import { World } from '../world/world';
import { Player } from '../entities/player';

export class Game {
  private renderer: Renderer;
  private input: Input;
  private world: World;
  private player: Player;
  private lastUpdateTime: number = 0;

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new Renderer(canvas);
    this.input = new Input();
    this.world = new World(64, 32); // 64x32 blocks
    this.player = new Player(10, 10, this.input, this.world);
  }

  start() {
    requestAnimationFrame(this.loop.bind(this));
  }

  loop(time: number) {
    const delta = (time - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = time;

    this.update(delta);
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }

  update(delta: number) {
    this.player.update(delta);
    // TODO: update mobs, animations, etc.
  }

  render() {
    this.renderer.clear();
    this.renderer.renderWorld(this.world, this.player);
    this.renderer.renderPlayer(this.player);
    // TODO: render mobs, ui, etc.
  }
}