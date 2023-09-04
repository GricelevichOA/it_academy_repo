import { Controller } from "./Controller.js";
import { Model } from "./Model.js";
import { View } from "./View.js";
import { NO_TIMER_VALUE, ONE_TICK } from "./constants.js";
import { validateDiameterInput } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const clockWraper = document.querySelector("#clock_wraper");
  const input = document.querySelector("#diameter-input");
  const button = document.querySelector("#build-clock");

  let intervalId = NO_TIMER_VALUE;

  button.addEventListener("click", () => {
    const model = new Model(validateDiameterInput(input.value));
    const view = new View("clock_wraper");
    const controller = new Controller(model, view);

    controller.start();

    intervalId = setInterval(() => {
      controller.step();
    }, ONE_TICK);
    
  });
});