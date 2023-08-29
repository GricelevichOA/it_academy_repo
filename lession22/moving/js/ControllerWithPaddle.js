import { ModelWithPaddle } from "./ModelWithPaddle.js";
import { ViewDOMWithPaddle } from "./ViewDOMWithPaddle.js";

export class ControllerWithPaddle {
  /**
   * @param {ModelWithPaddle} model
   * @param {ViewDOMWithPaddle} view
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.isGameLost = false;
  }

  step() {
    this.model.move();
    this.isGameLost = this.model.isGameLost;
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
    // const { directionX, directionY } = generateStartDirections();
    // this.model.setStartDirections(directionX, directionY);
    this.model.setStartDirections(-Math.SQRT1_2, -Math.SQRT1_2);
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