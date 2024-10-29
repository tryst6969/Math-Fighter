import Phaser from "phaser";
export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("overscene");
  }
  init(data) {
    this.replayButton = undefined;
    this.score = data.score;
  }
  preload() {
    this.load.image("gameover","images/gameover.png");
    this.load.image("bg","images/fight-bg.png");
    this.load.image("replay","images/replay.png");
    this.load.image("otherbg","images/bg_layer1.png");
  }
  create() {
    this.add.image(240, 320, "otherbg")
    this.add.image(240, 320, "bg")
    this.add.image(240, 320, "gameover")
    this.add.text(100, 300, "Score: " + this.score, {
      fontSize: "32px",
      fill: "black",
    });
    this.replayButton = this.add.image(200, 400, "replay").setInteractive().setScale(0.5);
    this.replayButton.once("pointerup",() => {
        this.scene.start("math-fighter-scene");
    },this)
  }
}