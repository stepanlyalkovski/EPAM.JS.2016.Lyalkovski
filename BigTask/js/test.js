var game = {};
game.isStopped = true;
game.btnStart = document.getElementById("btn-play");
/* Playground size - image size */
game.position = {Xmax: 700 - 64, Ymax: 400 - 64};

function getRandomArbitrary(max, min){
    return Math.random() * (max - min) + min;
}

function getRandPosition(){
    return getRandomArbitrary(0, 80);
}

function ChangePosition(){
    var items = document.getElementsByClassName("resource-item");
    for(var i = 0; i < items.length; i++){
        items[i].style.top = getRandomArbitrary(0, game.position.Ymax) + "px";
        items[i].style.left = getRandomArbitrary(0, game.position.Xmax) + "px";
    }
}
