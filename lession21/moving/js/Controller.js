import { Model } from "./Model.js";
import { View } from "./View.js";
import { generateStartDirections } from "./utils.js";

export class Controller {
  /**
   * @param {Model} model
   * @param {View} view
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
}