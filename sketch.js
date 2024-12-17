let colonies = [];
let environment;

function setup() {
  createCanvas(1920, 1080);

  // Initialize the environment with a specific background colour and tile size
  environment = new Environment(1920, 1080, color(240, 240, 240), 40); // 40x40 pixel tiles

  // Add some food tiles
  environment.addFood(200, 200, 1); // Full food level
  environment.addFood(240, 200, 0.5); // Half food level

  // Add some barrier tiles
  environment.addBarrier(400, 400);
  environment.addBarrier(440, 400);

  // Initialize two colonies with different colours and spawn points
  colonies.push(new Colony(color(255, 0, 0), 20, width * 0.25, height * 0.5)); // Red colony
  colonies.push(new Colony(color(128, 0, 128), 20, width * 0.75, height * 0.5)); // Purple colony
}

function draw() {
  environment.display(); // Draw the environment with background and tiles

  // Run each colony to update and display its ants
  for (let colony of colonies) {
    colony.run();
  }
}
