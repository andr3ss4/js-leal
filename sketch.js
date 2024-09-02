let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {

   createCanvas(400, 400);// width x height
background (color (100, 0, 0));
cor = color(random (0, 255), random (0, 255), random (0, 255));
 circuloX=[0,0, 0]
 circuloY=[random(height), random (height), random (height)];
}


//circuloX=0,0, 0
//circuloY= 300,150, 50

function draw() {
  
  fill (cor);
 circle( circuloX[0], circuloY[0] , 50); 
 circle( circuloX[1], circuloY[1], 50);
 circle( circuloX[2], circuloY[2], 50);

  circuloX[0]+=random(0, 3);
  circuloY[0]+=random(-3, 3)
  
  circuloX[1]+=random(0, 3);
  circuloY[1]+=random(-3, 3)
  
  circuloX[1]+=random(0, 3);
  circuloY[1]+=random(-3, 3)
  
  
  if(mouseIsPressed) {
   cor=color(random(0, 255), random(0,255), random (0, 255), random(0,100));
  
  
}
  
  
  
  
  

}