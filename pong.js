
// Set up a vector class to hold an x and y position
class Vec{
  constructor(x=0, y=0){ //set up defaults
    this.x = x;
    this.y = y;
  }

}

//Create a class for rectangles since they will be used a lot
class Rect{
  constructor(w, h){
    this.pos = new Vec;
    this.size = new Vec(w, h);
  }
}

// Use the Rect class to construct the ball
class Ball extends Rect{
  constructor(){
    // The super keyword is used to call functions on an object's parent
    super(10,10);
    // Adds velocity
    this.vel = new Vec;
  }
}


const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball;
ball.pos.x = 100;
ball.pos.y = 50;

// Function update takes a delta time (dt)
function update(dt){
  //The movement of the ball is relative to the time difference
  ball.pos.x += ball.vel.x * dt;
  ball.pos.x += ball.vel.y * dt;

}

context.fillStyle = "#000";
context.fillRect(0, 0, canvas.width, canvas.height)

context.fillStyle = "#fff";
context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
