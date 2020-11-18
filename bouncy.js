let x;
let y;
let r, g, b;
let number;

function setup()
{
    createCanvas(400, 400);
    x = 200;
    y = 200;
    number = 3;
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw()
{
    background(210);
    fill(r, g, b);
    ellipse(x, y, 60, 60);
    x += number;
    borderCheck();
}

function borderCheck()
{
   if(x > 400)
   {
       x = 400;
       number = -3;
   }

   if(x < 0)
   {
       x = 0;
       number = +3;
   }
}

function colorChanger()
{
    r = random(255);
    g = random(255);
    b = random(255);
}

function mousePressed()
{
    colorChanger();
}