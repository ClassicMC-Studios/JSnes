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
writeTileToAddress(sky);
writeTileToAddress(ground);
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
let xx = 0
window.main = function(){
requestAnimationFrame( main )
xx ++
c.fillStyle = "white"
c.fillRect(0,0,720,480)
renderBgFromAddress(bg1,xx,0);
};main();