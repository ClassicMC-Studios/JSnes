canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 480;
let leftKeyPressed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;
let anim = setInterval(onFrame,1);
let sprites  = [];
let tiles = [];
let key = "none";
function writeSpriteToAddress(sprite){
  sprites.push(sprite);
}
function bg(color){
  c.fillStyle = color;
  c.fillRect(0,0,720,480);
}
function renderTileFromAddress(tile,x,y){
  let startX = x
  for(let i =0;i<25;i++){
      c.fillStyle = tiles[tile][i][0];
      c.fillRect(x,y,8,8);
      x+=8
      if(i == 4||i==9||i==14||i==19){
        y += 8
        x = startX
      }
  }
}
function writeTileToAddress(tile){
  tiles.push(tile)
}
function renderBgFromAddress(bg,x,y){
  let strt = x;
  for(let i = 0;i<218;i++){
    if(i == 18||i==36||i==54||i==72||i==90||i==108||i==126||i==144||i==162||i==180||i==198){
      y += 40;
      strt= x
    }
    renderTileFromAddress(bg[i],strt,y);
    strt+=40;
  }
}
function renderSpriteFromAddress(sprite,x,y){
		let startX = x
    for(let i =0;i<25;i++){
        c.fillStyle = sprites[sprite][i][0];
        c.fillRect(x,y,8,8);
        x+=8
        if(i == 4||i==9||i==14||i==19){
        	y += 8
          x = startX
        }
    }
}
function keyPressed(evt){
  if(evt.keyCode == 37){
      leftKeyPressed = true;
  }
  if(evt.keyCode == 39){
      rightKeyPressed = true;
  }
  if(evt.keyCode == 38){
      upKeyPressed = true;
  }
  if(evt.keyCode == 40){
      downKeyPressed = true;
  }
}
function keyReleased(evt){
  if(evt.keyCode == 37){
      leftKeyPressed = false;
  }
  if(evt.keyCode == 39){
      rightKeyPressed = false;
  }
  if(evt.keyCode == 38){
      upKeyPressed = false;
  }
  if(evt.keyCode == 40){
      downKeyPressed = false;
  }
  key = "none";
}
function playerMove(){
    if(leftKeyPressed){
      key = "l"
    }
    if(rightKeyPressed){
      key = "r"
    }
    if(upKeyPressed){
      key = "u"
    }
    if(downKeyPressed){
      key = "d";
    }
}
function onFrame(){
  document.addEventListener('keydown',keyPressed);
  document.addEventListener('keyup',keyReleased);
  playerMove();
}
function renderClear(){
  c.fillStyle = "white";
  c.fillRect(0,0,720,480)
}
document.addEventListener('keydown',function (evt){
  if(event.keyCode == 88){
    action('x')   
  }else if(event.keyCode == 90){
    action('z');
  }
});