var game = {};
game.isStopped = true;

function ChangeState() {
    var color;
    var text;
    if(game.isStopped){
        game.timeId = setInterval(ChangePosition, 2000);
        color = "red";
        text = "Stop";
    } else {
        clearTimeout(game.timeId);
        color = "green";
        text = "Start";
    }
    game.isStopped = !game.isStopped; // change state
    game.controlBtn.style.background = color;
    game.controlBtn.innerHTML = text;
}

function getRandomArbitrary(max, min) {
    return Math.random() * (max - min) + min;
}

function ChangePosition() {
    var items = $(".resource-item");
    for(var i = 0; i < items.length; i++){
        items[i].style.top = getRandomArbitrary(0, game.position.Ymax) + "px";
        items[i].style.left = getRandomArbitrary(0, game.position.Xmax) + "px";
    }
}

$(document).ready(function() {

    game.btnStart = document.getElementById("btn-play");
    /* Playground size - image size */
    game.position = {Xmax: 700 - 64, Ymax: 400 - 64};
    game.controlBtn = $("#btn-control").get(0);
    game.controlBtn.style.backgroundcolor = "green";
    game.controlBtn.text = "Start";
    $("#btn-control").click(function () {
        ChangeState();
    });

});




