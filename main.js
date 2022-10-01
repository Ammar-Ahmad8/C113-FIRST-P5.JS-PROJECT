function setup(){
    canvas=createCanvas(600,400)
    canvas.position(110,200)
    video=createCapture(VIDEO)
    video.hide() 
}

 function draw(){
    image(video,170,130,300,200)
    
    fill(255,0,0)
    stroke(255,0,0)
    circle(50, 50, 80);
    circle(550, 50, 80);
    

    circle(550, 370, 80);
    
    
    circle(50, 370, 80);
    
    fill(0,255,0)
    stroke(0,25,0)
    
    rect(90, 40, 420, 20);
   
    rect(90, 360, 420, 20);
    rect(40, 80, 20, 250);
    rect(535, 80,20, 250);
 }

  function take_snapshot(){
    save('Ammar.png')
  }

