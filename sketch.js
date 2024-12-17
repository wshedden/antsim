let colonies = [];
let environment;

function setup() {
  createCanvas(1920, 1080);

  // Initialize the environment with a specific background colour
  environment = new Environment(1920, 1080, color(220, 240, 255));

  // Initialize two colonies with different colours and spawn points
  colonies.push(new Colony(color(255, 0, 0), 20, width * 0.25, height * 0.5)); // Red colony
  colonies.push(new Colony(color(128, 0, 128), 20, width * 0.75, height * 0.5)); // Purple colony

  // Example obstacle (x, y, width, height)
  environment.addObstacle(800, 400, 100, 200);
}

function draw() {
  environment.display(); // Draw the environment with background and obstacles

  // Run each colony to update and display its ants
  for (let colony of colonies) {
    colony.run();
  }
}
