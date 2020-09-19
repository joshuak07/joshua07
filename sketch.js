var zombiei,bulleti,guni,backgrouu;
var ci,bullet;
var bulletgroup,zombiegroup,zombie;
var j;
var zombie1,zombie2,zombie3;
function preload(){
   zombiei=loadImage("z1.jpeg") 
   bulleti=loadImage("bullet-26507_1280.png")
   guni=loadImage("gun_PNG1373.png");
   backgrouu=loadImage("bcak.jpg")
   ci=loadImage("soldier.png");
   zombie1=loadImage("z2.jpeg")
   zombie2=loadImage("z3.jpg")
   zombie3=loadImage("z4.png")
}

function setup(){
createCanvas(displayWidth,displayHeight)
j=createSprite(displayWidth/2-100,displayHeight/2+100,50,50);
j.addImage(ci);
j.scale=0.4;
bulletgroup=createGroup();
zombiegroup=createGroup();


}


function draw(){
background(backgrouu)
j.x=mouseX;
j.y=mouseY;

if(keyDown("space")){
   if(frameCount%10===0){
   bullet=createSprite(mouseX,mouseY,10,10);
   bullet.addImage(bulleti)
   bullet.scale=0.03
   bullet.velocityX=2;
   bulletgroup.add(bullet);
}

}
if(frameCount%100===0){
   var ran=Math.round(random(1,4));
   zombie=createSprite(displayWidth,random(50,displayHeight-100),50,50)
   switch(ran){
      case 1:zombie.addImage(zombiei);

      break;
      case 2:zombie.addImage(zombie1);
      
      break;
      case 3:zombie.addImage(zombie2);
      break;
      case 4:zombie.addImage(zombie3);
      break; 
   }
  
   zombie.scale=0.4;
   zombie.velocityX=-2;
   zombiegroup.add(zombie);
}
if(bulletgroup.isTouching(zombiegroup)){
zombiegroup.destroyEach();
bulletgroup.destroyEach();
}
drawSprites();

}



