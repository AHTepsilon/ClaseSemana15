let x = 400;
let y = 200;

function setup() 
  {
    createCanvas(800, 600);
   
  }
  
  function draw()
    {
      background(255);

      fill(255, 0, 0);
      ellipse(x, y, 50, 50);

      x ++;

      if(x > 800)
      {
        x = 0;
      }
    }
