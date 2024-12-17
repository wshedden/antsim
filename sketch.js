let colonies = [];
let environment;

function setup() {
  createCanvas(1920, 1080);

  // Initialize the environment with a specific background colour and tile size
  environment = new Environment(1920, 1080, color(240, 240, 240), 40);

  // Initialize two colonies with different colours and spawn points
  colonies.push(new Colony(color(255, 0, 0), 20, width * 0.25, height * 0.5, "Red Colony"));
  colonies.push(new Colony(color(128, 0, 128), 20, width * 0.75, height * 0.5, "Purple Colony"));
}

function draw() {
  environment.display(); // Draw the environment with background and tiles

  // Run each colony to update and display its ants
  for (let colony of colonies) {
    colony.run();
  }

  // Display ant information panel when hovering over an ant
  for (let colony of colonies) {
    environment.displayAntInfo(colony.ants);
  }
}
