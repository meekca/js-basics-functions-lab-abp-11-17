// Code your solution in this file!
let origin

let destination

function calculateVertical (origin, destination) {
  return Math.abs(origin - destination);

}

function distanceFromHqInBlocks (origin) {
  return Math.abs(origin-42);
}

function distanceFromHqInFeet () {
    distanceFromHqInBlocks (origin) * 264;
}