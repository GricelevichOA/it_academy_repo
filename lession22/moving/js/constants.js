export const MIN_POS_X = 0;
export const MIN_POS_Y = 0;
export const MAX_POS_X = 300; // 300px - 10px
export const MAX_POS_Y = 250; // 300px - 10px
export const BALL_DIAMETER = 10;
export const MAX_POS_BALL_X = MAX_POS_X - BALL_DIAMETER;
export const MAX_POS_BALL_Y = MAX_POS_Y - BALL_DIAMETER;
export const START_POS_X = 50;
export const START_POS_Y = 50;
export const ACCELERATION_X = 0; // "ускорение/замедление". 0 = не действует
export const ACCELERATION_Y = 0.1;
export const ENERGY_LOST_BY_TIME = 0.999; // потеря энергии при движении
export const ENERGY_LOST_BY_HIT = 0.9; // потеря энергии при ударе
export const ONE_STEP = 3;
export const ONE_STEP_IF_RUN = 7;
export const ONE_TICK = 1000 / 60; // 25 fps
export const NO_TIMER_VALUE = "no-timer";

export const PADDLE_WIDTH = 10;
export const PADDLE_HEIGHT = 75;
export const PADDLE_START_POSITION = 0;
export const PADDLE_ONE_STEP = 1;
export const MAX_POS_PADDLE_Y = MAX_POS_Y - PADDLE_HEIGHT;