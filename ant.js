class Ant {
  constructor(x, y, colonyColour) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.bodySegmentSizes = [10, 15, 20]; // Head, thorax, and abdomen sizes
    this.antennaeLength = 15;
    this.antennaeAngle = PI / 4; // Angle for antennae
    this.segmentColours = [this.randomColour(), this.randomColour(), colonyColour];
  }

  // Function to generate a random colour for head and thorax
  randomColour() {
    return color(random(100, 255), random(100, 255), random(100, 255));
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Slight random variation in movement
    this.vx += random(-0.1, 0.1);
    this.vy += random(-0.1, 0.1);

    // Limit speed
    this.vx = constrain(this.vx, -1.5, 1.5);
    this.vy = constrain(this.vy, -1.5, 1.5);

    environment.enforceBoundaries(this);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(atan2(this.vy, this.vx)); // Rotate ant to face movement direction

    // Draw antennae before any body segments
    this.drawAntennae(0, this.bodySegmentSizes[0]);

    // Draw body segments
    let xOffset = 0;
    this.drawSegment(xOffset, this.bodySegmentSizes[0], this.segmentColours[0]);
    xOffset -= this.bodySegmentSizes[0] * 0.8;

    this.drawSegment(xOffset, this.bodySegmentSizes[1], this.segmentColours[1]);
    xOffset -= this.bodySegmentSizes[1] * 0.8;

    this.drawSegment(xOffset, this.bodySegmentSizes[2], this.segmentColours[2]); // Largest segment with colony colour

    pop();
  }

  drawAntennae(headX, headSize) {
    stroke(0);
    strokeWeight(1);

    // Corrected antennae positions to start from the center of the head
    let headTopY = -headSize * 0.35 + 2.01;
    line(headX, headTopY, headX + this.antennaeLength * cos(-this.antennaeAngle), headTopY + this.antennaeLength * sin(-this.antennaeAngle));
    line(headX, headTopY, headX + this.antennaeLength * cos(this.antennaeAngle), headTopY + this.antennaeLength * sin(this.antennaeAngle));
  }

  drawSegment(xOffset, size, segmentColour) {
    noStroke();
    fill(segmentColour);
    ellipse(xOffset, 0, size, size * 0.7);
  }
}
