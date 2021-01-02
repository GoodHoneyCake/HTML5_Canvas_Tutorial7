export class Sheep {
  constructor(img, stageWidth) {
    this.img = img;
  }
  draw(ctx, t, dots) {
    this.animate(ctx, dots);
  }
  animate(ctx, dots) {}
}
