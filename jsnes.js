createCanvas(720,480);
noStroke();
let sprites  = [];
function writeSprite(sprite){
	sprites.push(sprite);
}
function renderSpriteFromAddress(sprite,x,y){
		let startX = x
    for(let i =0;i<sprites[sprite].length;i++){
        /* console.log(sprites[sprite][i][1]) */
        selectColor(sprites[sprite][i][1]);
        rect(x,y,8,8);
        x+=8
        if(i == 3||i==7||i==11){
        	y += 8
          x = startX
        }
    }
}
