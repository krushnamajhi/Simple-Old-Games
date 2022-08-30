const CANVAS_SIZE = [350, 350];
const SNAKE_START = [
  [8, 9],
  [8, 10]
];
const APPLE_START = [8, 3];
const SCALE = 20;
const SPEED = 1000;
const DIRECTIONS = {
  38: [0, -1], // up
  40: [0, 1], // down
  37: [-1, 0], // left
  39: [1, 0] // right
};

export {
  CANVAS_SIZE,
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS
};