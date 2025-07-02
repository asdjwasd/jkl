import dirt from '../../public/assets/blocks/dirt.png';
import stone from '../../public/assets/blocks/stone.png';
import iron_ore from '../../public/assets/blocks/iron_ore.png';
import gold_ore from '../../public/assets/blocks/gold_ore.png';
// ...import more as needed

export const blocksData = [
  {
    name: "Air",
    sprite: new Image(), // transparent
  },
  {
    name: "Dirt",
    sprite: (() => { const img = new Image(); img.src = dirt; return img; })(),
  },
  {
    name: "Stone",
    sprite: (() => { const img = new Image(); img.src = stone; return img; })(),
  },
  {
    name: "Iron Ore",
    sprite: (() => { const img = new Image(); img.src = iron_ore; return img; })(),
  },
  {
    name: "Gold Ore",
    sprite: (() => { const img = new Image(); img.src = gold_ore; return img; })(),
  },
  // ...add more ores/blocks
];