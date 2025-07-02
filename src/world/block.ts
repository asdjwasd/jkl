import { blocksData } from '../data/blocks';

export enum BlockType {
  Air,
  Dirt,
  Stone,
  IronOre,
  GoldOre,
  // Add more ores/blocks as needed
}

export class Block {
  type: BlockType;
  x: number;
  y: number;
  sprite: HTMLImageElement;

  constructor(type: BlockType, x: number, y: number) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.sprite = blocksData[type].sprite;
  }

  isBreakable(): boolean {
    return this.type !== BlockType.Air;
  }
}