const jsonOutputElement = document.getElementById('json-output');
const randomButton = document.getElementById('random-button');

randomButton.addEventListener('click', getRandomCelestialBody);

function getRandomCelestialBody() {
  const randomIndex = Math.floor(Math.random() * celestialBodies.length);
  const randomCelestialBody = celestialBodies[randomIndex];

  
  jsonOutputElement.textContent = JSON.stringify(randomCelestialBody, null, 2);
}
