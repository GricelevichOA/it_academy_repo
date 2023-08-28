import { ModelWithPaddle } from "./ModelWithPaddle.js";

export class ViewWithPaddle {
  constructor(ballId, paddleId) {
    this.ball = document.getElementById(ballId);
    this.paddle = document.getElementById(paddleId);
  }

  /**
   * @param {ModelWithPaddle} model
   */
  updatePosition(model) {
    this.paddle.style.top = `${model.paddlePosition}px` 

    this.ball.style.left = `${model.posX}px`;
    this.ball.style.top = `${model.posY}px`;
  }
}