import { Model } from "./Model.js";

export class View {
  constructor(ElementId) {
    this.ball = document.getElementById(ElementId);
  }

  /**
   * @param {Model} model
   */
  updatePosition(model) {
    this.ball.style.left = `${model.posX}px`;
    this.ball.style.top = `${model.posY}px`;
  }
}