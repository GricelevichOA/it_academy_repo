import { Model } from "./Model.js";
import { View } from "./View.js";
import { getCurrentTime } from "./utils.js";

export class Controller {
  /**
   * 
   * @param {Model} model 
   * @param {View} view 
   */
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {

  }

  start() {
    this.view.buildClock(this.model.diameter);
    this.view.updateClock(this.model);
    this.model.setCurrentTime(getCurrentTime);
  }

  step() {
    this.model.setCurrentTime(getCurrentTime());
    this.view.updateClock(this.model);
    console.log(`${this.model.currentHours}:${this.model.currentMinutes}:${this.model.currentSeconds}`);
  }
}