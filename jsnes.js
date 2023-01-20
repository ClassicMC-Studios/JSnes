canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 480;
let sprites  = [];
function writeSpriteToAddress(sprite){
  sprites.push(sprite);
}
function bg(color){
  c.fillStyle = color;
  c.fillRect(0,0,720,480);
}
function renderSpriteFromAddress(sprite,x,y){
		let startX = x
    for(let i =0;i<sprites[sprite].length;i++){
        c.fillStyle = sprites[sprite][i][1];
        c.fillRect(x,y,8,8);
        x+=8
        if(i == 3||i==7||i==11){
        	y += 8
          x = startX
        }
    }
}
