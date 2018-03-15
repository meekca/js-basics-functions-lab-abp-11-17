// Code your solution in this file!
let origin

let destination

function calculateVertical (origin, destination) {
  return Math.abs(origin - destination);

}

function distanceFromHqInBlocks (origin) {
  return Math.abs(origin-42);
}

function distanceFromHqInFeet (origin) {
    return distanceFromHqInBlocks (origin) * 264;
}

function distanceTravelledInFeet (origin, destination) {
  return Math.abs(origin - destination) *264;
}
