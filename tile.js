class Tile {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
  
      // Default state is empty
      this.state = 'empty';  // Possible states: 'empty', 'food', 'barrier'
      this.foodLevel = 0;    // Food level (0 to 1 for food tiles)
    }
  
    // Set the tile as food with a specific food level (0 to 1)
    setFood(level) {
      this.state = 'food';
      this.foodLevel = constrain(level, 0, 1);
    }
  
    // Set the tile as a barrier
    setBarrier() {
      this.state = 'barrier';
      this.foodLevel = 0;
    }
  
    // Clear the tile to be empty
    clear() {
      this.state = 'empty';
      this.foodLevel = 0;
    }
  
    // Draw the tile with a colour based on its state
    display() {
      stroke(150);
      strokeWeight(0.2);
      noFill();
  
      if (this.state === 'food') {
        fill(0, 255 * this.foodLevel, 0); // Green intensity based on food level
      } else if (this.state === 'barrier') {
        fill(0); // Black for barriers
      }
  
      rect(this.x, this.y, this.size, this.size);
    }
  
    // Check if the tile is occupied (food or barrier)
    isOccupied() {
      return this.state === 'food' || this.state === 'barrier';
    }
  }
  