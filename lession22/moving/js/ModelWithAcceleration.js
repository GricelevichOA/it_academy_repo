import {
  MIN_POS_X,
  MIN_POS_Y,
  MAX_POS_X,
  MAX_POS_Y,
  START_POS_X,
  START_POS_Y,
  ONE_STEP,
  ONE_STEP_IF_RUN,
  ACCELERATION_X,
  ACCELERATION_Y,
  MAX_POS_BALL_X,
  MAX_POS_BALL_Y
} from "./constants.js";

export class ModelWithAcceleration {
  constructor() {
    this.posX = START_POS_X;
    this.posY = START_POS_Y;
    this.isRun = false;
    this.directionX = Math.SQRT1_2;
    this.directionY = Math.SQRT1_2;
    this.accelerationX = ACCELERATION_X
    this.accelerationY = ACCELERATION_Y;
  }

  setStartDirections(directionX, directionY) {
    this.directionX = directionX;
    this.directionY = directionY;
  }

  move() {
    const step = this.isRun ? ONE_STEP_IF_RUN : ONE_STEP;

    this.directionX += this.accelerationX;
    this.posX = Math.round(this.posX + this.directionX * step);
    this.posX = Math.max(MIN_POS_X, this.posX);
    this.posX = Math.min(MAX_POS_BALL_X, this.posX);

    if (this.posX === MIN_POS_X || this.posX === MAX_POS_BALL_X) {
      this.directionX *= -1;
    }

    this.directionY += this.accelerationY;
    this.posY = Math.round(this.posY + this.directionY * step);
    this.posY = Math.max(MIN_POS_Y, this.posY);
    this.posY = Math.min(MAX_POS_BALL_Y, this.posY);

    if (this.posY === MIN_POS_Y || this.posY === MAX_POS_BALL_Y) {
      this.directionY *= -1;
    }
  }

  toggleIsRun() {
    this.isRun = !this.isRun;
  }
}