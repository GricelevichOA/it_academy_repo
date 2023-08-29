import { ModelWithPaddle } from "./ModelWithPaddle.js";
import { BALL_DIAMETER, MAX_POS_X, MAX_POS_Y, PADDLE_HEIGHT, PADDLE_WIDTH, START_POS_X, START_POS_Y } from "./constants.js";

export class ViewCanvasWithPaddle {
  constructor(fieldId) {
    /** @type HTMLCanvasElement */
    this.canvas = document.getElementById(fieldId);
    /**@type CanvasRenderingContext2D */
    this.context = this.canvas.getContext("2d");

    this.scaleRatio = this.canvas.height / MAX_POS_Y;
    
    this.drawBall(START_POS_X, START_POS_Y);
    this.drawPaddle(0, 0);

  }

  drawBall(x, y) {
    this.context.fillStyle = "brown";
    this.context.beginPath();
    this.context.arc(
      (x + BALL_DIAMETER / 2) * this.scaleRatio, 
      (y + BALL_DIAMETER / 2) * this.scaleRatio,
      (BALL_DIAMETER / 2) * this.scaleRatio,
      0, 
      2 * Math.PI, 
      true
    );
    this.context.fill();
    // this.context.closePath();
  }

  drawPaddle(x, y) {
    this.context.fillStyle = "black";
    this.context.fillRect(
      x * this.scaleRatio, 
      y * this.scaleRatio, 
      PADDLE_WIDTH * this.scaleRatio, 
      PADDLE_HEIGHT * this.scaleRatio);
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * @param {ModelWithPaddle} model
   */
  updatePosition(model) {
    this.clear();
    this.drawPaddle(0, model.paddlePosition);
    this.drawBall(model.posX, model.posY);
  }
}