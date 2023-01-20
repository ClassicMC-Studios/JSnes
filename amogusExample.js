let body = "black";
let x = 720/2-16;
let y = 10;
let acc = 0;
let macc = 0;
let leftKeyPressed = false;
let rightKeyPressed = false;
let touchingGround = false;
let anim = setInterval(onFrame,1);
bg("orange");
let amogusSprite = [
    [0,"orange"],[1,body],[2,body],[3,body],
    [4,body],[5,body],[6,"blue"],[7,"blue"],
    [8,body],[9,body],[10,body],[11,body],
    [12,"orange"],[13,body],[14,"orange"],[15,body]
    ]
function onFrame(){
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
    playerMove();
}
writeSpriteToAddress(amogusSprite);
function redraw(){
    bg("orange");
    renderSpriteFromAddress(0,x,y);
}
window.main = function(){
    requestAnimationFrame( main );
    redraw();
    if(y >= 400){
        y = 400
        acc = 0
        touchingGround = true;
    }else{
        acc += 0.1;
    }
    y+=acc;
};main();
function keyPressed(evt){if(evt.keyCode == 37){leftKeyPressed = true;};if(evt.keyCode == 39){rightKeyPressed = true;};}
function keyReleased(evt){if(evt.keyCode == 37){leftKeyPressed = false;};if(evt.keyCode == 39){rightKeyPressed = false;};macc =0;}
function playerMove(){
    if(macc <= 5){
        macc += 0.01;
    }
    if(leftKeyPressed){x-=macc;};
    if(rightKeyPressed){x +=macc;};
}
document.addEventListener('keydown',function (evt){
    if(event.keyCode == 32 && touchingGround){
        acc = -3;
        y -= 1;
    }
});