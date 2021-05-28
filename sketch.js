var canvas,backgroundImage,gamestate=0
var playercount,database,form,player,gamestate
var allplayers
var car1,car2,car3,car4,cars
var car1Image,car2Image,car3Image,car4Image,track

function preload(){
    car1Image=loadImage("images/car1.png")
    car2Image=loadImage("images/car2.png")
    car3Image=loadImage("images/car3.png")
    car4Image=loadImage("images/car4.png")
    track=loadImage("images/track.jpg")

}

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game=new Game()
    game.getstate()
    game.start()
}
function draw(){
if(playercount===4){
    game.update(1)
}
if(gamestate===1){
    clear()
    game.play()
}
if(gamestate===2){
    game.end()
}
}
