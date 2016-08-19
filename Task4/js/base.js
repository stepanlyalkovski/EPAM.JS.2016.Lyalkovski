var unit = {};
unit.zombie = {};
unit.zombie.types = ["Michael", "Strong"];

var core = {};

core.data = {};
core.data.elements = [];

core.control = {};
core.control.endPoint = 860;

core.control.createZombie = function() {
    var randIndex = random(0, unit.zombie.types.length);
    var randomLine = random(0,5);
    var $randomLine = $(".field-line").eq(randomLine);
    var type = unit.zombie.types[randIndex];
    var settings = {position: 0, $line: $randomLine, endPoint: core.control.endPoint};
    var Zombie = unit.zombie[type];
    var zombie = new Zombie(settings);

    /* make a connection between zombie and core by callback */
    zombie.subscribe(core.control.receiveZombieMsg);
    core.data.elements.push(zombie);
};

core.control.receiveZombieMsg = function() {
    /* now we have only one message type - zombie has reached the end of a line; */
    core.control.end();
};

core.control.end = function() {
    clearTimeout(core.control.timeId);
    for(var i = 0; i < core.data.elements.length; i++) {
        core.data.elements[i].die();
    }
    core.data.elements = [];
    $(".game-over").css("display", "block");
};

core.control.move = function() {
    console.log("move!");
    for(var i = 0; i < core.data.elements.length; i++) {
        core.data.elements[i].move();
    }
};

$(function() {
    core.control.$generateBtn = $("#btnGenerate");
    core.control.$lines = $(".field-line");
    core.control.$generateBtn.click(function() {
        core.control.createZombie();
    });
    core.control.timeId = setInterval(core.control.move, 100);
});