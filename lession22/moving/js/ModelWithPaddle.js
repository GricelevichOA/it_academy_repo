import {
  MIN_POS_X,
  MIN_POS_Y,
  START_POS_X,
  START_POS_Y,
  ONE_STEP,
  ONE_STEP_IF_RUN,
  PADDLE_START_POSITION,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_ONE_STEP,
  MAX_POS_BALL_X,
  MAX_POS_BALL_Y,
  MAX_POS_PADDLE_Y,
  BALL_DIAMETER,
} from "./constants.js";

export class ModelWithPaddle {
  constructor() {
    this.posX = START_POS_X;
    this.posY = START_POS_Y;
    this.isRun = false;
    this.directionX = Math.SQRT1_2;
    this.directionY = Math.SQRT1_2;
    this.paddlePosition = PADDLE_START_POSITION;
    this.paddleHeight = PADDLE_HEIGHT;
    this.paddleWidth = PADDLE_WIDTH;
    this.paddleDirection = 0;
    this.isGameLost = false;
  }

  setStartDirections(directionX, directionY) {
    this.directionX = directionX;
    this.directionY = directionY;
  }

  // -1, 0, 1
  setPaddleDirection(paddleDirectionSign) {
    this.paddleDirection = Math.sign(paddleDirectionSign);

    // switch(Math.sign("setPaddleDirection", paddleDirectionSign)) {
    //   case -1:
    //     this.paddleDirection = -PADDLE_ONE_STEP;
    //     break;
    //   case 1:
    //     this.paddleDirection = PADDLE_ONE_STEP;
    //     break;
    //   default:
    //     this.paddleDirection = 0;
    // }
  }

  move() {
    if(this.isGameLost) {
      return;
    }

    // ball
    const step = this.isRun ? ONE_STEP_IF_RUN : ONE_STEP;

    this.posX = Math.round(this.posX + this.directionX * step);
    this.posX = Math.max(MIN_POS_X, this.posX);
    this.posX = Math.min(MAX_POS_BALL_X, this.posX);

    if (this.posX === MAX_POS_BALL_X || this.posX === MIN_POS_X) {
      this.directionX *= -1;
    }

    this.posY = Math.round(this.posY + this.directionY * step);
    this.posY = Math.max(MIN_POS_Y, this.posY);
    this.posY = Math.min(MAX_POS_BALL_Y, this.posY);

    if (this.posY === MAX_POS_BALL_Y || this.posY === MIN_POS_Y) {
      this.directionY *= -1;
    }

    if (this.posX === MIN_POS_X) {
      console.log("Game lost");
      this.isGameLost = true;
      return;
    }

    // paddle
    this.paddlePosition = Math.round(this.paddlePosition + this.paddleDirection * PADDLE_ONE_STEP);
    this.paddlePosition = Math.max(MIN_POS_Y, this.paddlePosition); // TODO: MIN_POS_X - replace with paddle pos
    this.paddlePosition = Math.min(MAX_POS_PADDLE_Y, this.paddlePosition);

    const leftBallCenterY = this.posY + BALL_DIAMETER / 2;
    const leftBallCenterX = this.posX;

    if (leftBallCenterY >= this.paddlePosition 
      && leftBallCenterY <= this.paddlePosition + PADDLE_HEIGHT 
      && leftBallCenterX <= PADDLE_WIDTH) {
      console.log("hit");
      this.directionX = 1;
    }
    this.paddlePosition
  }

  toggleIsRun() {
    this.isRun = !this.isRun;
  }
}