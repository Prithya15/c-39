class Game{
    constructor(){
    }
    getstate(){
        var gamestateref=database.ref("gamestate")
        gamestateref.on("value",function(data){
            gamestate=data.val()
        })
    }
    update(state){
        database.ref("/").update({
            gamestate:state
        })
    }
   async start(){
if(gamestate===0){
    player=new Player()
    var playercountref=await database.ref("/playercount").once("value")
    if(playercountref.exists()){
playercount=playercountref.val()
player.getcount()
    }
    
    form=new Form()
    form.display()
}
car1=createSprite(100,200)
car2=createSprite(300,200)
car3=createSprite(500,200)
car4=createSprite(700,200)
car1.addImage("car1",car1Image)
car2.addImage("car2",car2Image)
car3.addImage("car3",car3Image)
car4.addImage("car4",car4Image)
cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        textSize(30)
        text("Game Start",120,100)
        Player.getPlayerinfo()
        if(allplayers!==undefined){
        background("grey")
        image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
        var displayposition=130
        var index=0
        var x=175
        var y=0
        for(var plr in allplayers){
            index=index+1
            x=x+200
            y=displayHeight-allplayers[plr].distance
            cars[index-1].x=x
            cars[index-1].y=y
            if(index===player.index){
                cars[index-1].shapeColor=("red")
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y
            }

        }
        }
        if(player.distance>=3680){
            gamestate=2
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=10
            player.update()
        }
        drawSprites()
    }
    end(){
console.log("gameover")
    }
}