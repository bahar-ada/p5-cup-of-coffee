function setup() {
  createCanvas(800, 800);


}

function draw() {
  //background color
  let r= map(mouseX, 0, width, 0, 255);
  let g= map(mouseY, 0 , height, 0 , 255);
  let b= map(mouseX+ mouseY, 0 , width+ height, 0, 255);
  background(r,g,b);

  //saucer
  fill(158, 172, 186);
  ellipse(width/2, height/2, 520,520);

  stroke(217, 234, 253);
  strokeWeight(5);
  fill(217, 234, 253);
  ellipse(width/2, height/2, 500,500);  

  fill(255);
  ellipse(350, 350, 300,80);

  //cookie
  stroke(12,12,12)
  fill(72, 30, 20);
  ellipse(550, 550, 120,120);

  stroke(255, 204, 234);
  strokeWeight(2.5);
  fill(255, 204, 234);
  ellipse(550, 550, 100,100);

  //pink little circle start
  stroke(255, 138, 138);  
  fill(255, 138, 138)
  ellipse(550, 550, 10, 10);
  
  stroke(255, 138, 138); 
  fill(255, 138, 138);
  ellipse(540, 520, 10, 10); 

  stroke(255, 138, 138); 
  fill(255, 138, 138);
  ellipse(520, 540, 10, 10); 

  stroke(255, 138, 138);
  fill(255, 138, 138);
  ellipse(580, 580, 10, 10); 

  stroke(255, 138, 138); 
  fill(255, 138, 138);
  ellipse(580, 520, 10, 10); 

  stroke(255, 138, 138);
  fill(255, 138, 138);
  ellipse(590, 540, 10, 10);

  stroke(255, 138, 138);
  fill(255, 138, 138);
  ellipse(520, 520, 10, 10);
  
  stroke(255, 138, 138); 
  fill(255, 138, 138);
  ellipse(520, 570, 10, 10); 

  stroke(255, 138, 138);
  fill(255, 138, 138);
  ellipse(570, 570, 10, 10); 

  stroke(255, 138, 138); 
  fill(255, 138, 138);
  ellipse(540, 580, 10, 10); 
 //pink little circle end

  //brown coffee circles start
  stroke(255);
  strokeWeight(2.5);
  fill(72, 20, 30);
  ellipse(width/2, height/2, 300,300);  

  stroke(78, 54, 54)
  strokeWeight(.5)
  fill(78, 54, 54)
  ellipse(width/2, height/2, 250,250);

  stroke(50,30,30)
  strokeWeight(.5)
  fill(50,30,30)
  ellipse(width/2, height/2, 200,200);

  stroke(12,12,12)
  strokeWeight(.5)
  fill(12,12,12)
  ellipse(width/2, height/2, 150,150);
  //brown coffee circles end

  //spone
  stroke(154, 166, 178);
  strokeWeight(1); 
  fill(154, 166, 178);
  triangle(width/2, height/2, mouseX+25,mouseY+25,mouseX+50,mouseY+50);

}
