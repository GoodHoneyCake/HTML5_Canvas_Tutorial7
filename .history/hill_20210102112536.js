export class Hill {
  constructor() {
    this.color = color;
    this.speed = speed;
    this.total = total;
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }
  draw(ctx) {}
}
