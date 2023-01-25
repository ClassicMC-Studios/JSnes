let idle = [
    ["white"],["#a21f1f"],["#7b0909"],["#a21f1f"],["white"],
    ["#4e0404"],["#7b0909"],["black"],["#2f1fa2"],["black"],
    ["white"],["white"],["black"],["black"],["white"],
    ["white"],["#7b0909"],["#a21f1f"],["#a21f1f"],["#a2671f"],
    ["#7b0909"],["#a21f1f"],["#a21f1f"],["#a21f1f"],["white"]
    ]
let moving = [
    ["white"],["white"],["white"],["white"],["white"],
    ["white"],["#a21f1f"],["#7b0909"],["#a21f1f"],["white"],
    ["#4e0404"],["#7b0909"],["black"],["#2f1fa2"],["black"],
    ["white"],["#7b0909"],["black"],["black"],["white"],
    ["#7b0909"],["#a21f1f"],["#a21f1f"],["#a21f1f"],["#a2671f"],
    ]
let lightning = [
    ["white"],["white"],["white"],["white"],["white"],
    ["white"],["#d7b900"],["white"],["#d7b900"],["white"],
    ["#d7b900"],["white"],["#d7b900"],["white"],["#d7b900"],
    ["white"],["white"],["white"],["white"],["white"],
    ["white"],["white"],["white"],["white"],["white"],  
    ]   
let lightningMoving = [
    ["white"],["white"],["white"],["white"],["white"],
    ["white"],["white"],["white"],["white"],["white"],
    ["#d7b900"],["white"],["#d7b900"],["white"],["#d7b900"],
    ["white"],["#d7b900"],["white"],["#d7b900"],["white"],
    ["white"],["white"],["white"],["white"],["white"],  
    ]    
let x = 0;
let y = 0;
let lightY = 0;
function move(){
    animLight ++;
    if(x+animLight >= 480){
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
};player();
window.main = function(){
    renderClear();
    requestAnimationFrame( main );
    player()
    if(key == "r"){
        x++;
    }
    if(key == "l"){
        x--;
    }
    if(key == "u"){
        y--;
    }
    if(key == "d"){
        y++;
    }
};main();