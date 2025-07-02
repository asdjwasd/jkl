import { Block, BlockType } from './block';
import { blocksData } from '../data/blocks';

export class World {
  width: number;
  height: number;
  blocks: Block[][];

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.blocks = [];
    for (let y = 0; y < height; y++) {
      this.blocks[y] = [];
      for (let x = 0; x < width; x++) {
        const type = y > 20 ? BlockType.Stone : BlockType.Dirt;
        this.blocks[y][x] = new Block(type, x, y);
      }
    }
    // Example ore patches
    this.blocks[25][30] = new Block(BlockType.IronOre, 30, 25);
    this.blocks[27][35] = new Block(BlockType.GoldOre, 35, 27);
  }

  getBlock(x: number, y: number): Block | null {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) return null;
    return this.blocks[y][x];
  }
}