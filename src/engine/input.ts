export class Input {
  keys: Record<string, boolean> = {};

  constructor() {
    window.addEventListener('keydown', e => {
      this.keys[e.key.toLowerCase()] = true;
    });
    window.addEventListener('keyup', e => {
      this.keys[e.key.toLowerCase()] = false;
    });
  }

  isDown(key: string) {
    return this.keys[key.toLowerCase()] || false;
  }
}