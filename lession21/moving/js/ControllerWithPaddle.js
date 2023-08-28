import { ModelWithPaddle } from "./ModelWithPaddle.js";
import { ViewWithPaddle } from "./ViewWithPaddles.js";
import { generateStartDirections } from "./utils.js";

export class ControllerWithPaddle {
  /**
   * @param {ModelWithPaddle} model
   * @param {ViewWithPaddle} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  step() {
    this.model.move();
    this.view.updatePosition(this.model);
  }

  toggleIsRun() {
    this.model.toggleIsRun();
  }

  init() {
    // pass
    console.log("controller init");
  }

  start() {
    const { directionX, directionY } = generateStartDirections();
    this.model.setStartDirections(directionX, directionY);
  }

  stop() {
    // pass
    console.log("controller stop");
  }

  setPaddleUpDirection() {
    this.model.setPaddleDirection(-1);
  }

  setPaddleDownDirection() {
    this.model.setPaddleDirection(1);
  }

  setPaddleNoDirection() {
    this.model.setPaddleDirection(0);
  }
}