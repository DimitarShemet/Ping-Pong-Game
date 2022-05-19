// Работа клавиш//
document.addEventListener("keydown",getKey,false)
function getKey(key){
   if (key.keyCode==17){
      speedRacket1=3
   }
   if (key.keyCode==16){
      
       speedRacket1=-3
    }

if (key.keyCode==40){
   speedRacket2=3
}
if (key.keyCode==38){
   
    speedRacket2=-3
 }

}

document.body.addEventListener("keyup",keyStop,false)
function keyStop(key){

if (key.keyCode==16){
   speedRacket1=0
  
}
if(key.keyCode=17){
speedRacket1=0
}
if(key.keyCode=38){
    speedRacket2=0
    }
 if(key.keyCode=40){
   speedRacket2=0
        }
}

// Используемые постоянные, переменные//
let racketWidth=10
let racketHeight=70
let ballDiameter=30
let ballRadius=15
let speedRacket1=0
let speedRacket2=0
let positionRacket1=50
let positionRacket2=50
let positionTopBall=180
let positionLeftBall=270
let topSpeedBall=0
let leftSpeedBall=0
let score1=0
let score2=0
let courtHeight=400
let courtWidth=600
function start(){
   // Ставим мяч в центр корта//
    positionTopBall=200
    positionLeftBall=270
   let route
   if(Math.random()<0.5){
   route=1
   }
   else
    route=-1
    topSpeedBall=route*(Math.random()*4+1)
    leftSpeedBall=route*(Math.random()*4+1)
}



setInterval(startTimer,1000/60)  
startTimer()
function startTimer(){
   positionLeftBall+=leftSpeedBall
   positionTopBall+=topSpeedBall

   positionRacket1+=speedRacket1
   positionRacket2+=speedRacket2
   if(positionRacket1<=1)
   positionRacket1=1
   if(positionRacket2<=1)
   positionRacket2=1
   if(positionRacket1>=courtHeight-racketHeight)
   positionRacket1=courtHeight-racketHeight
   if(positionRacket2>=courtHeight-racketHeight)
   positionRacket2=courtHeight-racketHeight


   if(positionTopBall-ballRadius<=1)
   topSpeedBall=-topSpeedBall
   if(positionTopBall>=courtHeight-ballDiameter+ballRadius)
   topSpeedBall=-topSpeedBall
 
   // Основная логика игры//

   // Для левой стенки корта 
   if(positionLeftBall<=racketWidth+ballRadius){
      if(positionTopBall>positionRacket1 && positionTopBall<positionRacket1+racketHeight)
      leftSpeedBall=-leftSpeedBall
      
        if(positionLeftBall<ballRadius){
           console.log(score1=score1+1)
           leftSpeedBall=0
           topSpeedBall=0
           positionLeftBall=ballRadius
           
        }
           }
        

   // Для правой  стенки корта 
   if(positionLeftBall>=courtWidth-ballDiameter-racketWidth+ballRadius){
     if(positionTopBall>positionRacket2 && positionTopBall<positionRacket2+racketHeight)
     leftSpeedBall=-leftSpeedBall
     if (positionLeftBall>courtWidth-ballRadius){
    console.log(score2=score2+1)
    leftSpeedBall=0
    topSpeedBall=0
    positionLeftBall=courtWidth-ballRadius
     }
     }
     document.getElementById('score1').innerHTML=score1+":"
     document.getElementById('score2').innerHTML=score2
   
 


// Отрисовка
let  canvas=document.getElementById("canvas")
let context=canvas.getContext("2d")

context.fillStyle="white"//  белый фон
context.fillRect(0, 0, 650, 500) 
context.fillStyle="yellow" // корт
context.fillRect(0, 0, 600, 400) 

context.fillStyle="green" //ракетка 1
context.fillRect(0,positionRacket1,10,70)
context.fillStyle="blue" //ракетка2
context.fillRect(590,positionRacket2,10,70)
context.fillStyle="red"

  context.beginPath(); // мячик
  context.arc(positionLeftBall,positionTopBall, 15, 0,Math.PI*2, false);
  context.fill();                          
                      



}
 