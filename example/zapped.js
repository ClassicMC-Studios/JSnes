let idle = [
    ["cls"],["#a21f1f"],["#7b0909"],["#a21f1f"],["cls"],
    ["#4e0404"],["#7b0909"],["black"],["#2f1fa2"],["black"],
    ["cls"],["cls"],["black"],["black"],["cls"],
    ["cls"],["#7b0909"],["#a21f1f"],["#a21f1f"],["#a2671f"],
    ["#7b0909"],["#a21f1f"],["#a21f1f"],["#a21f1f"],["cls"]
    ]
let moving = [
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["#a21f1f"],["#7b0909"],["#a21f1f"],["cls"],
    ["#4e0404"],["#7b0909"],["black"],["#2f1fa2"],["black"],
    ["cls"],["#7b0909"],["black"],["black"],["cls"],
    ["#7b0909"],["#a21f1f"],["#a21f1f"],["#a21f1f"],["#a2671f"],
    ]
let lightning = [
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["#d7b900"],["cls"],["#d7b900"],["cls"],
    ["#d7b900"],["cls"],["#d7b900"],["cls"],["#d7b900"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ]   
let lightningMoving = [
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["#d7b900"],["cls"],["#d7b900"],["cls"],["#d7b900"],
    ["cls"],["#d7b900"],["cls"],["#d7b900"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ]   
let bgLine = [
    ["black"],["cls"],["black"],["cls"],["black"],
    ["black"],["black"],["cls"],["black"],["black"],  
    ["black"],["cls"],["black"],["cls"],["black"],
    ["black"],["black"],["cls"],["black"],["black"],  
    ["black"],["cls"],["black"],["cls"],["black"],
] 
let bgLineInverse = [
    ["black"],["black"],["cls"],["black"],["black"],  
    ["black"],["cls"],["black"],["cls"],["black"],
    ["black"],["black"],["cls"],["black"],["black"],
    ["black"],["cls"],["black"],["cls"],["black"],  
    ["black"],["black"],["cls"],["black"],["black"],  
] 
let cls = [
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
    ["cls"],["cls"],["cls"],["cls"],["cls"],  
    ["cls"],["cls"],["cls"],["cls"],["cls"],
] 
writeTileToAddress(cls);
writeTileToAddress(bgLine);
writeTileToAddress(bgLineInverse);
let bgg = [
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0
]
let x = 0;
let y = 0;
let lightY = 0;
function move(){
    animLight +=4;
    if(x+animLight >= 720){
        animLight = 0;
        lgh = false;
        clearInterval(movi);
    }
}
let movi;
let lgh = false;
function action(button){
    if(button == 'x' && animLight == 0){
        //x
        lightY = y;
        lgh = true
        movi = setInterval(move,1);
    }
    if(button == 'z'){
        //z
       if(key == "l"){
        x -= 50;
       }else if(key == "r"){
        x+=50;
       }else if(key == "u"){
        y-=50;
       }
       else if(key == "d"){
        y+=50;
       }
    }
}
let toDraw = 0
function draw(){
    if(toDraw == 1){
        toDraw = 0;
        return;
    }else{toDraw = 1;return;}
}
let animLight = 0;
let animate = setInterval(draw,200);
writeSpriteToAddress(idle);
writeSpriteToAddress(moving);
writeSpriteToAddress(lightning);
writeSpriteToAddress(lightningMoving);
function player(){ 
    if(lgh){
        renderSpriteFromAddress(toDraw+2,x+animLight,lightY)
    }
    if(key != "none"){
        renderSpriteFromAddress(toDraw,x,y)
    }else{
        renderSpriteFromAddress(0,x,y);
        animate = undefined;
    }
}
window.main = function(){
    c.fillStyle = "white"
    c.fillRect(0,0,720,480)
    requestAnimationFrame( main );
    renderBgFromAddress(bgg,0,0);
    player();
    if(key == "r"){
        x+=2;
    }
    if(key == "l"){
        x-=2;
    }
    if(key == "u"){
        y-=2;
    }
    if(key == "d"){
        y+=2;
    }
};main();