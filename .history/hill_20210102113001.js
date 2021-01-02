export class Hill {
  constructor(color, speed, total) {
    this.color = color;
    this.speed = speed;
    this.total = total;
  }
  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.points = [];
    this.gap = Math.ceil(thil.stageWidth / (this.total - 2));

    for (let i = 0; i < this.total; i++) {
      this.points[i] = {
        x: i * this.gap,
        y: this.getY(),
      };
    }
  }
  draw(ctx) {}

  getY() {
    const min = this.stageHeight / 8;
    const max = this.stageHeight - min;
    return min + Math.random() * max;
  }
}
