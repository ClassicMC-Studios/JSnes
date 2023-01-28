let sky = [
    ["blue"],["blue"],["blue"],["blue"],["blue"],
    ["blue"],["blue"],["blue"],["blue"],["blue"],  
    ["blue"],["blue"],["blue"],["blue"],["blue"],
    ["blue"],["blue"],["blue"],["blue"],["blue"], 
    ["blue"],["blue"],["blue"],["blue"],["blue"],
]
let ground = [
		["green"],["green"],["green"],["green"],["green"],
    ["green"],["green"],["green"],["green"],["green"],  
    ["green"],["green"],["green"],["green"],["green"],
    ["green"],["green"],["green"],["green"],["green"],  
    ["green"],["green"],["green"],["green"],["green"],
]
let orange = [
  ["orange"],["orange"],["orange"],["orange"],["orange"],
  ["orange"],["orange"],["orange"],["orange"],["orange"],  
  ["orange"],["orange"],["orange"],["orange"],["orange"],
  ["orange"],["orange"],["orange"],["orange"],["orange"],  
  ["orange"],["orange"],["orange"],["orange"],["orange"],
]
writeTileToAddress(sky);
writeTileToAddress(ground);
writeTileToAddress(orange);
let bg1 = [
	1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
let x = 100
function main(){
  renderBgFromAddress(bg1,00,0);
  renderTileFromAddress(2,100,100);
};main();