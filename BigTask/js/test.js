var game = {};

game.resources = [
    { type: "cheese", count: 0, imageUrl: "img/cheese.png"},
    { type: "orange", count: 0, imageUrl: "img/orange.png"},
    { type: "cherry", count: 0, imageUrl: "img/cherry.png"},
    { type: "pumpkin", count: 0, imageUrl: "img/pumpkin.png"}
];

game.isStopped = true;

function ChangeState() {
    var color;
    var text;
    if(game.isStopped){
        game.timeId = setInterval(CreateResource, 500);
        color = "red";
        text = "Stop";
    } else {
        clearTimeout(game.timeId);
        color = "green";
        text = "Start";
    }
    game.isStopped = !game.isStopped; // change state
    game.$controlBtn.css("background-color", color);
    game.$controlBtn.text(text);
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

game.addPoint = function(resourceType) {
    for(var i = 0; i < this.resources.length; i++) {
        if(this.resources[i].type == resourceType) {
            this.resources[i].count++;
            var $counter = $(".resource-counter[data-counter-type='" + this.resources[i].type + "']");
            $counter.find(".resource-counter-value").text(this.resources[i].count);
            break;
        }
    }
};

function PickResource() {
    if(game.isStopped) return;
    var $element = $(this);
    console.log($element.data("resource-type"));
    game.addPoint($element.data("resource-type"));
    $element.remove();
}

function GeneratePosition($element) {
    $element.css("top", getRandomArbitrary(0, game.position.Ymax) + "px");
    $element.css("left", getRandomArbitrary(0, game.position.Xmax) + "px");
}

function CreateResource() {
    var $playground = $("#playground");
    var resourceIndex = Math.floor(getRandomArbitrary(0, game.resources.length));
    var $element = $("<div class='resource-item'> <img src =' "+ game.resources[resourceIndex].imageUrl + "'</img></div>");
    $element.css("display", "none");
    $element.data("resource-type", game.resources[resourceIndex].type);
    $element.click(PickResource);
    GeneratePosition($element);
    $playground.append($element);
    $element.fadeIn(700);
    console.log($element);
}

/* demo version: pretend that we know there are two columns with two enable positions */
game.initialize = function InitializeCounterWidgets() {
    var $resourceContainer = $(".resource-bar");
    var itemPerColumn = 2;
    var resources = this.resources;
    for(var i = 0; i < resources.length; i++) {
        /* temp demo */
        var $container;
        if(i < itemPerColumn) {
            $container = $resourceContainer.eq(0);
        } else {
            $container = $resourceContainer.eq(1);
        }

        console.log(resources[i]);
        var $image = $("<img src='" + resources[i].imageUrl + "'</img>");
        var $resourceImage = $("<div class='resource-counter-image'></div>").append($image);
        var $counter = $("<div class='resource-counter' data-counter-type='" + resources[i].type + "'></div>")
                        .append($resourceImage)
                        .append("<div class='resource-counter-value'>-</div>");
        $container.append($counter);
    }

};
/*
 <div class="resource-counter">
 <div class="resource-counter-image">
 <img src="img/cheese.png" alt="cheese">
 </div>
 <div class="resource-counter-value">-</div>
 </div>
 */
$(document).ready(function() {

    /* Playground size - image size */
    game.position = {Xmax: 700 - 64, Ymax: 400 - 64};
    game.initialize();
    game.$controlBtn = $("#btn-control");
    game.$controlBtn.css("background-color", "green");
    game.$controlBtn.text("Start");
    game.$controlBtn.click(function () {
        ChangeState();
    });


});




