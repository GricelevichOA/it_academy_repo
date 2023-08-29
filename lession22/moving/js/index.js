"use strict";

import { ONE_TICK, NO_TIMER_VALUE } from "./constants.js";
import { Model } from "./Model.js";
import { ModelWithAcceleration } from "./ModelWithAcceleration.js";
import { ModelWithEnergyLost } from "./ModelWithEnergyLost.js";
import { ModelWithPaddle } from "./ModelWithPaddle.js";
import { View } from "./View.js";
import { ViewDOMWithPaddle } from "./ViewDOMWithPaddle.js";
import { ViewSVGWithPaddle } from "./VIiewSVGWithPaddle.js";
import { ViewCanvasWithPaddle } from "./ViewCanvasWithPaddle.js";
import { Controller } from "./Controller.js";
import { ControllerWithPaddle } from "./ControllerWithPaddle.js";

window.addEventListener("DOMContentLoaded", () => {
  const buttonStart = document.querySelector("#button-start");
  const buttonRun = document.querySelector("#button-run");
  const infoContainer = document.querySelector("#info");

  // const model = new Model();
  // const model = new ModelWithAcceleration();
  // const model = new ModelWithEnergyLost();
  const model = new ModelWithPaddle();

  // const view = new View("ball");
  // const view = new ViewDOMWithPaddle("ball", "paddle");
  // const view = new ViewSVGWithPaddle("ball", "paddle");
  const view = new ViewCanvasWithPaddle("field");

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
      intervalId = setInterval(() => {
        controller.step();

        if (controller.isGameLost) {
          infoContainer.innerText = "game over (you lost)";
        }
      }, ONE_TICK);
      buttonStart.innerText = "Pause";
    } else {      
      controller.stop();
      clearInterval(intervalId);
      intervalId = NO_TIMER_VALUE;
      buttonStart.innerText = "Start";
    }
  });
});
