import { ModelWithPaddle } from "./ModelWithPaddle.js";
import { BALL_DIAMETER } from "./constants.js";

export class ViewSVGWithPaddle {
  constructor(ballId, paddleId) {
    this.ball = document.getElementById(ballId);
    this.paddle = document.getElementById(paddleId);
  }

  /**
   * @param {ModelWithPaddle} model
   */
  updatePosition(model) {
    this.paddle.setAttribute("y", model.paddlePosition);

    this.ball.setAttribute("cx", model.posX + BALL_DIAMETER / 2);
    this.ball.setAttribute("cy", model.posY + BALL_DIAMETER / 2);
  }
}