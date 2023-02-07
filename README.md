<img  src="https://raw.githubusercontent.com/ClassicMC-Studios/ClassicMC-Studios.github.io/main/jsnes.png"  width="200"  align="center"/>

> The *worst* way to make **Javascript** games<br/>

###  Limitations

- Each screen has a set amount of Meta pixels (pixels at an 8/8 size)
- Each sprite or tile can use an 5/5 grid of meta pixels.
- You can save each tile and sprite to an address
-  **6** buttons available <^v> x z
- To draw a sprite make an array `let sprite = []`

``` js
let  sprite  =  [
	// Designed as a 5/5 grid to visualize the art
	["black"],["black"],["black"],["black"],["black"],
	["black"],["white"],["white"],["white"],["black"],
	["black"],["white"],["white"],["white"],["black"],
	["black"],["white"],["white"],["white"],["black"],
	["black"],["black"],["black"],["black"],["black"]
]
```

- Then use the `writeSpriteToAddress`
  
``` js
writeSpriteToAddress(sprite);
// Sprite num (starts at zero), x, y
renderSpriteFromAddress(0,100,100);
```

- To use the z and x keys write the `function action(button){}`

``` js
function action(button){
	if(button  ==  'x'){
		alert("\'X\' has been pressed")
	}
	if(button  ==  'z'){
		alert("\'z\' has been pressed")
	}
}
```

- To use the arrow keys write `window.main = function(){}`

``` js
window.main  =  function(){	
	requestAnimationFrame( main );
	if(key  ==  "u"){
		y--;
	}

	if(key  ==  "d"){
		y++;
	}

	if(key  ==  "l"){
		x--;
	}

	if(key  ==  "r"){
		x++;
	}
};main();

```

- To draw a background first, create tiles like you would a sprite.

```js
let  tile  =  [
	// Designed as a 5/5 grid to visualize the art
	["black"],["black"],["black"],["black"],["black"],
	["black"],["white"],["white"],["white"],["black"],
	["black"],["white"],["white"],["white"],["black"],
	["black"],["white"],["white"],["white"],["black"],
	["black"],["black"],["black"],["black"],["black"]
]
writeTileToAddress(tile);
```

- Then make the background layout

```js
let bg = [
	/* This draws a grid where each number
	are used as the index for the tile previosly added.*/
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
]
//You do not need to write the layout to an address
// bg source, x position, y position
renderBgFromAddress(bg,0,0);
```