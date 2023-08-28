"use strict";

import { ONE_TICK, NO_TIMER_VALUE } from "./constants.js";
import { Model } from "./Model.js";
import { ModelWithAcceleration } from "./ModelWithAcceleration.js";
import { ModelWithEnergyLost } from "./ModelWithEnergyLost.js";
import { ModelWithPaddle } from "./ModelWithPaddle.js";
import { View } from "./View.js";
import { ViewWithPaddle } from "./ViewWithPaddles.js";
import { Controller } from "./Controller.js";
import { ControllerWithPaddle } from "./ControllerWithPaddle.js";

window.addEventListener("DOMContentLoaded", () => {
  const buttonStart = document.querySelector("#button-start");
  const buttonRun = document.querySelector("#button-run");

  // const model = new Model();
  // const model = new ModelWithAcceleration();
  // const model = new ModelWithEnergyLost();
  const model = new ModelWithPaddle();
  // const view = new View("ball");
  const view = new ViewWithPaddle("ball", "paddle")
  // const controller = new Controller(model, view);
  const  controller = new ControllerWithPaddle(model, view);

  buttonRun.addEventListener("click", () => {
    controller.toggleIsRun();
    buttonRun.classList.toggle("active");
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowDown") {
      controller.setPaddleDownDirection();
    } else if (e.code === "ArrowUp") {
      controller.setPaddleUpDirection();
    }
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowDown" || e.code === "ArrowUp") {
      controller.setPaddleNoDirection();
    }
  });

  let intervalId = NO_TIMER_VALUE;

  controller.init();

  buttonStart.addEventListener("click", () => {
    if (intervalId === NO_TIMER_VALUE) {
      controller.start();
      intervalId = setInterval(() => controller.step(), ONE_TICK);
      buttonStart.innerText = "Pause";
    } else {
      controller.stop();
      clearInterval(intervalId);
      intervalId = NO_TIMER_VALUE;
      buttonStart.innerText = "Start";
    }
  });
});
