export class Model {
  constructor(diameter) {
    this.diameter = diameter;

    const time = new Date();
    this.currentHours = time.getHours();
    this.currentMinutes = time.getMinutes();
    this.currentSeconds = time.getSeconds();
  }

  setCurrentTime({hours, minutes, seconds}) {
    this.currentHours = hours;
    this.currentMinutes = minutes;
    this.currentSeconds = seconds;
  }
}