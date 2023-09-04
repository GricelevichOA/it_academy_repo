import { CLOCK_COLOR_HOUR, CLOCK_COLOR_MAIN, CLOCK_COLOR_BLACK, HAND_RATIO_SECONDS, HAND_RATIO_MINUTES, HAND_RATIO_HOURS } from "./constants.js";

export class View {
  constructor(wraperId) {
    this.wraper = document.getElementById(wraperId);
    this.digitalClockElem =  this.buildDigitalClock();

    this.handSeconds;
    this.handMinutes;
    this.handHours;
  }

  buildClock(diameter) {
    // очистить элемент
    this.wraper.innerHTML = "";

    // постройка циферблата
    const clockElement = document.createElement("div");    
    clockElement.style.width = diameter + "px";
    clockElement.style.height = diameter + "px";
    clockElement.style.borderRadius = "50%";
    clockElement.style.backgroundColor = CLOCK_COLOR_MAIN;
    clockElement.style.position = "relative";

    // цифры на циферблате
    for (let i = 1; i <= 12; i++) {
      const num = document.createElement("div");
      num.style.position = "absolute";
      num.style.backgroundColor = CLOCK_COLOR_HOUR;
      num.style.borderRadius = "50%";
      num.style.height = diameter / 10 + "px";
      num.style.width = diameter / 10 + "px";
      num.style.top = `calc(50% - ${diameter / 20}px)`;
      num.style.left = `calc(50% - ${diameter / 20}px)`;
      num.style.display = "flex";
      num.style.justifyContent = "center";
      num.style.alignItems = "center";
      num.innerText = i;
      num.style.transform = `rotate(${i * 30 - 90}deg) translate(${(diameter / 2 - diameter / 10)}px) rotate(${90 - 30 * i}deg)`;
      clockElement.append(num);
    }

    this.handSeconds = this.buildHandSeconds(diameter);
    this.handMinutes = this.buildHandMinutes(diameter);
    this.handHours = this.buildHandHours(diameter);

    clockElement.append(this.digitalClockElem);
    clockElement.append(this.handHours);
    clockElement.append(this.handMinutes);
    clockElement.append(this.handSeconds);
    this.wraper.append(clockElement);
  }

  buildHandSeconds(diameter) {
    const handSeconds = document.createElement("div");

    handSeconds.style.position = "absolute";
    handSeconds.style.width = Math.floor(diameter / 100) + "px";
    handSeconds.style.height = `${diameter * HAND_RATIO_SECONDS / 2}px`;
    handSeconds.style.bottom = "50%";
    handSeconds.style.left = "50%";
    handSeconds.style.backgroundColor = CLOCK_COLOR_BLACK;
    handSeconds.style.transform = "translateX(-50%)";
    handSeconds.style.zIndex = "12";
    handSeconds.style.transformOrigin = "bottom";

    return handSeconds;
  }

  buildHandMinutes(diameter) {
    const handMinutes = document.createElement("div");

    handMinutes.style.position = "absolute";
    handMinutes.style.width = Math.floor(diameter / 100 * 2) + "px";;
    handMinutes.style.height = `${diameter * HAND_RATIO_MINUTES / 2}px`;
    handMinutes.style.bottom = "50%";
    handMinutes.style.left = "50%";
    handMinutes.style.backgroundColor = CLOCK_COLOR_BLACK;
    handMinutes.style.transform = "translateX(-50%)";
    handMinutes.style.zIndex = "12";
    handMinutes.style.transformOrigin = "bottom";

    return handMinutes;
  }

  buildHandHours(diameter) {
    const handHours = document.createElement("div");

    handHours.style.position = "absolute";
    handHours.style.width = Math.floor(diameter / 100 * 3) + "px";;
    handHours.style.height = `${diameter * HAND_RATIO_HOURS / 2}px`;
    handHours.style.bottom = "50%";
    handHours.style.left = "50%";
    handHours.style.backgroundColor = CLOCK_COLOR_BLACK;
    handHours.style.transform = "translateX(-50%)";
    handHours.style.zIndex = "12";
    handHours.style.transformOrigin = "bottom";

    return handHours;
  }

  buildDigitalClock() {
    const digitalClock = document.createElement("div");
    digitalClock.innerText = "00:00:00";
    digitalClock.style.position = "absolute";
    digitalClock.style.left = "50%";
    digitalClock.style.transform = "translateX(-50%)";
    digitalClock.style.top = "20%";

    return digitalClock;
  }

  updateClock(model) {   
    this.digitalClockElem.innerText = `${model.currentHours}:${model.currentMinutes}:${model.currentSeconds}`;

    this.handSeconds.style.transform = `translateX(-50%) rotate(${(360 / 60) * model.currentSeconds}deg)`;
    this.handMinutes.style.transform = `translateX(-50%) rotate(${(360 / 60) * model.currentMinutes}deg)`;
    this.handHours.style.transform = `translateX(-50%) rotate(${(360 / 12) * model.currentHours}deg)`;
  }
}