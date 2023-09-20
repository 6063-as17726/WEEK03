let xpos = 100; 

function setup() {
    createCanvas(600,600); 
}

function draw() {
    background(200,20,20); 
    //rect(xpos, 10,30,30); 
    //rect(xpos, 50,30,30); 
    //rect(xpos, 90,30,30); 
    
    if (mouseX> width/2)
    {
    if(mouseY>height/2)
    {
    fill(20,10,20);
    } 
    else
    {fill(0,255,0);}
}
if(mouseX<width/2)
{
    if(mouseY>height/2)
    {fill(0,50,0);}
    else{fill(0,0,255);}
}

rect(mouseX,mouseY,30,30);
}
