canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");
canvas.width = 720;
canvas.height = 480;
let tiles = [];
function bg(color){
    c.fillStyle = color;
    c.fillRect(0,0,720,480);
}
function writeTileToAddress(tile){
    tiles.push(tile)
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
function renderBgFromAddress(bg,x,y){
        let strt = x;
        for(let z = 0;z<216;z++){
        if(z == 18||z==36||z==54||z==72||z==90||z==108||z==126||z==144||z==162||z==180||z==198){
            y += 40;
            strt= x
        }
        //   renderTileFromAddress(bg[z],strt,y);
        let drawY = y
        let drawX = strt
        for(let i =0;i<25;i++){
            c.fillStyle = tiles[bg[z]][i][0];
            c.fillRect(drawX,drawY,8,8);
            drawX+=8
            if(i == 4||i==9||i==14||i==19){
            drawY += 8
            drawX = strt
            }
        }
        // sus
        strt+=40;
    }
}