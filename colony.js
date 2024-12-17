class Colony {
  constructor(colour, numAnts, spawnX, spawnY, name) {
    this.colour = colour;
    this.name = name;
    this.ants = [];

    for (let i = 0; i < numAnts; i++) {
      this.ants.push(new Ant(spawnX, spawnY, this.colour, this.name));
    }
  }

  run() {
    for (let ant of this.ants) {
      ant.move();
      ant.display();
    }
  }
}
