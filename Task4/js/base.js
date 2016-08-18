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
    var type = unit.zombie.types[randIndex];
    var settings = {position: 0};
    var zombie = new unit.zombie[type](settings);
    var $zombie = $("<div class='zombie'></div>");
    $zombie.css('right', settings.position);
    $zombie.addClass(zombie.type);
    core.data.elements.push({model: zombie, $view: $zombie});
    zombie.line = randomLine;
    this.$lines.eq(randomLine).append($zombie);
};

core.control.move = function() {
    for(var i = 0; i < core.data.elements.length; i++) {
        var position = core.data.elements[i].model.move();
        if(position < core.control.endPoint) {
            core.data.elements[i].$view.css('right', position);
        } else {
            core.data.elements[i].model.die();
            core.data.elements[i].$view.remove();
            core.data.elements.splice(i,1);
        }
    }
};

$(function() {
    core.control.$generateBtn = $("#btnGenerate");
    core.control.$lines = $(".field-line");
    core.control.$generateBtn.click(function() {
        core.control.createZombie();
    });
    setInterval(core.control.move, 100);
});