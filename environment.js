class Environment {
    constructor(width, height, backgroundColor) {
      this.width = width;
      this.height = height;
      this.backgroundColor = backgroundColor;
      this.obstacles = []; // Placeholder for future obstacles
    }
  
    // Draw the environment with the background and obstacles
    display() {
      background(this.backgroundColor);
  
      // Placeholder for obstacle rendering
      for (let obstacle of this.obstacles) {
        fill(100);
        noStroke();
        rect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
      }
    }
  
    // Add an obstacle to the environment
    addObstacle(x, y, w, h) {
      this.obstacles.push({ x, y, w, h });
    }
  
    // Check if a point is colliding with any obstacles
    checkCollision(x, y) {
      for (let obstacle of this.obstacles) {
        if (x > obstacle.x && x < obstacle.x + obstacle.w &&
            y > obstacle.y && y < obstacle.y + obstacle.h) {
          return true;
        }
      }
      return false;
    }
  
    // Ensure entities stay within environment boundaries
    enforceBoundaries(entity) {
      if (entity.x < 0 || entity.x > this.width) entity.vx *= -1;
      if (entity.y < 0 || entity.y > this.height) entity.vy *= -1;
    }
  }
  