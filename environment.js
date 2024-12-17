class Environment {
  constructor(width, height, backgroundColor, tileSize) {
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
    this.tileSize = tileSize;
    this.tiles = this.createGrid();
  }

  // Create a grid of Tile objects
  createGrid() {
    let tiles = [];
    for (let y = 0; y < this.height; y += this.tileSize) {
      let row = [];
      for (let x = 0; x < this.width; x += this.tileSize) {
        row.push(new Tile(x, y, this.tileSize));
      }
      tiles.push(row);
    }
    return tiles;
  }

  // Display the environment with the background and tiles
  display() {
    background(this.backgroundColor);

    for (let row of this.tiles) {
      for (let tile of row) {
        tile.display();
      }
    }

    this.displayTileInfo();
  }

  // Display tile information in the top-right corner
  displayTileInfo() {
    let tile = this.getTileAtMouse();

    if (tile) {
      let panelWidth = 200;
      let panelHeight = 120;
      let panelX = this.width - panelWidth - 20;
      let panelY = 20;

      fill(50, 50, 50, 220);
      stroke(200);
      strokeWeight(2);
      rect(panelX, panelY, panelWidth, panelHeight, 10);

      fill(255);
      noStroke();
      textSize(16);
      textAlign(LEFT, TOP);

      let typeText = `Type: ${tile.state}`;
      text(typeText, panelX + 10, panelY + 10);

      if (tile.state === "food") {
        let foodText = `Food Level: ${tile.foodLevel.toFixed(2)}`;
        text(foodText, panelX + 10, panelY + 40);
      }

      if (tile.state === "barrier") {
        let barrierText = `This is a barrier`;
        text(barrierText, panelX + 10, panelY + 40);
      }
    }
  }

  // Get the tile under the mouse position
  getTileAtMouse() {
    let col = Math.floor(mouseX / this.tileSize);
    let row = Math.floor(mouseY / this.tileSize);

    if (
      row >= 0 &&
      row < this.tiles.length &&
      col >= 0 &&
      col < this.tiles[0].length
    ) {
      return this.tiles[row][col];
    }
    return null;
  }

  // Ensure entities stay within environment boundaries
  enforceBoundaries(entity) {
    if (entity.x < 0 || entity.x > this.width) entity.vx *= -1;
    if (entity.y < 0 || entity.y > this.height) entity.vy *= -1;
  }

  // Add a food tile at a specific position with a given food level
  addFood(x, y, level) {
    let tile = this.getTileAtPosition(x, y);
    if (tile) {
      tile.setFood(level);
    }
  }

  getTileAtPosition(x, y) {
    let col = Math.floor(x / this.tileSize);
    let row = Math.floor(y / this.tileSize);

    if (
      row >= 0 &&
      row < this.tiles.length &&
      col >= 0 &&
      col < this.tiles[0].length
    ) {
      return this.tiles[row][col];
    }
    return null;
  }

  // Add a barrier tile at a specific position
  addBarrier(x, y) {
    let tile = this.getTileAtPosition(x, y);
    if (tile) {
      tile.setBarrier();
    }
  }

  // Display ant information in the top-left corner
  displayAntInfo(ants) {
    for (let ant of ants) {
      if (ant.isMouseOver()) {
        let panelWidth = 200;
        let panelHeight = 120;
        let panelX = 20;
        let panelY = 20;

        // Draw panel background and border
        fill(50, 50, 50, 220); // Semi-transparent dark background
        stroke(200);
        strokeWeight(2);
        rect(panelX, panelY, panelWidth, panelHeight, 10); // Rounded corners

        // Display ant information text
        fill(255);
        noStroke();
        textSize(16);
        textAlign(LEFT, TOP);

        let colonyText = `Colony: ${ant.colonyName}`;
        let healthText = `Health: ${ant.health}`;
        let foodText = `Food Level: ${ant.foodLevel}`;

        text(colonyText, panelX + 10, panelY + 10);
        text(healthText, panelX + 10, panelY + 40);
        text(foodText, panelX + 10, panelY + 70);

        break; // Only display one ant's info at a time
      }
    }
  }
}
