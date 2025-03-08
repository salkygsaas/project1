function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const colors = ["red", "green", "blue", "yellow"];
  return colors[getRandomInt(colors.length)];
}

const randomNumber = getRandomInt(10);
console.log(`Random number: ${randomNumber}`);

const randomColor = getRandomColor();
console.log(`Random color: ${randomColor}`);
