let body = "black";
bg("orange");
let amogusSprite = [
    [0,"orange"],[1,body],[2,body],[3,body],
    [4,body],[5,body],[6,"blue"],[7,"blue"],
    [8,body],[9,body],[10,body],[11,body],
    [12,"orange"],[13,body],[14,"orange"],[15,body]
    ]
writeSprite(amogusSprite);
renderSpriteFromAddress(0,0,0);
