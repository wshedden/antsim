class Colony {
    constructor(colour, numAnts, spawnX, spawnY) {
      this.colour = colour; // Colony-specific colour for the largest segment
      this.ants = [];
  
      // Initialize ants at the specified spawn location
      for (let i = 0; i < numAnts; i++) {
        this.ants.push(new Ant(spawnX, spawnY, this.colour));
      }
    }
  
    // Method to update and display all ants in the colony
    run() {
      for (let ant of this.ants) {
        ant.move();
        ant.display();
      }
    }
  }
  