function getRandomArbitrary(max, min) {
    return Math.random() * (max - min) + min;
}

function GeneratePosition($element) {
    $element.css("top", getRandomArbitrary(0, game.position.Ymax) + "px");
    $element.css("left", getRandomArbitrary(0, game.position.Xmax) + "px");
}

function PickResource() {
    if(game.isStopped) return;
    var $element = $(this);

    game.addPoint($element.data("resource-type"));
    $element.stop();
    $element.animate({top: "-200px"}, 400, function() {
        $element.remove();
    });
}

function CreateResource() {
    var $playground = $("#playground");
    var resourceIndex = Math.floor(getRandomArbitrary(0, game.resources.data.length));
    /* set image url path */
    var $element = $("<div class='resource-item'> <img src =' "
                     + game.resources.data[resourceIndex].imageUrl
                     + "'</img></div>");

    $element.hide();
    $element.data("resource-type", game.resources.data[resourceIndex].type);
    $element.click(PickResource);
    GeneratePosition($element);
    $playground.append($element);
    $element.fadeIn(game.resources.duration, function() {
            $element.remove();
    });
    console.log($element);
}

function CreateBomb() {
    var $playground = $("#playground");
    var resourceIndex = Math.floor(getRandomArbitrary(0, game.resources.data.length));
    var $bomb = $("<div class='bomb'> <img src =' "+ game.bomb.imageUrl + "'</img></div>");

    $bomb.css("display", "none");
    GeneratePosition($bomb);
    $playground.append($bomb);
    $bomb.fadeIn(game.bomb.duration, function() {
        game.removePoints(10);
        $bomb.remove();
    });
}

var game = {};

game.resources = {
    data: [
        { type: "cheese", count: 0, imageUrl: "img/cheese.png"},
        { type: "orange", count: 0, imageUrl: "img/orange.png"},
        { type: "cherry", count: 0, imageUrl: "img/cherry.png"},
        { type: "pumpkin", count: 0, imageUrl: "img/pumpkin.png"}
    ],
    interval: 500,
    duration: 700
};
game.isStopped = true;
game.bomb = { interval: 5000, duration: 2000, pointHarm : 10, imageUrl: "img/bomb.png"}

game.changeState = function () {
    var color;
    var text;

    if(this.isStopped){
        $(".resource-item").resume();
        $(".bomb").resume();
        this.resourceTimeId = setInterval(CreateResource, game.resources.interval);
        this.bombTimeId = setInterval(CreateBomb, game.bomb.interval);
        color = "red";
        text = "Stop";
        this.$controlBtn.addClass("btn-control-stop");
        this.$controlBtn.removeClass("btn-control-start");
    } else {
        $(".resource-item").pause();
        $(".bomb").pause();
        clearTimeout(this.resourceTimeId);
        clearTimeout(this.bombTimeId);

        color = "green";
        text = "Start";
        this.$controlBtn.removeClass("btn-control-stop");
        this.$controlBtn.addClass("btn-control-start");
    }
    this.isStopped = !game.isStopped; // change state

    this.$controlBtn.text(text);
};

game.addPoint = function(resourceType) {
    for(var i = 0; i < this.resources.data.length; i++) {
        if(this.resources.data[i].type == resourceType) {
            this.resources.data[i].count++;
            var $counter = $(".resource-counter[data-counter-type='" + this.resources.data[i].type + "']");
            $counter.find(".resource-counter-value").text(this.resources.data[i].count);
            $counter.addClass("counter-points-added");
            setTimeout(function() {
                $counter.removeClass("counter-points-added");
            }, 200);

            break;
        }
    }
};

game.removePoints = function() {
    var resourceIndex = Math.floor(getRandomArbitrary(0, game.resources.data.length));
    var randomResource = this.resources.data[resourceIndex];

    randomResource.count = randomResource.count - this.bomb.pointHarm;
    if(randomResource.count < 0) {
        randomResource.count = 0;
    }
    var counterValue = randomResource.count || "-";

    /* find resource counter of current type and update value */
    var $counter = $(".resource-counter[data-counter-type='" + randomResource.type + "']");
    $counter.find(".resource-counter-value").text(counterValue);

    $counter.addClass("counter-points-removed");
    setTimeout(function() {
        $counter.removeClass("counter-points-removed");
    }, 200);
};

/* demo version: pretend that we know there are two columns with two enable positions */
/* create resource counters. Counter types depend on resources in game.resources.data */
game.initialize = function InitializeCounterWidgets() {
    var $resourceContainer = $(".resource-bar");
    var itemPerColumn = 2;
    var resources = this.resources.data;

    for(var i = 0; i < resources.length; i++) {
        /* temp demo */
        var $container;
        if(i < itemPerColumn) {
            $container = $resourceContainer.eq(0);
        } else {
            $container = $resourceContainer.eq(1);
        }
        var $image = $("<img src='" + resources[i].imageUrl + "'</img>");
        var $resourceImage = $("<div class='resource-counter-image'></div>").append($image);
        var $counter = $("<div class='resource-counter' data-counter-type='" + resources[i].type + "'></div>")
                        .append($resourceImage)
                        .append("<div class='resource-counter-value'>-</div>");
        $container.append($counter);

        this.$controlBtn = $("#btn-control");
        this.$controlBtn.removeClass("btn-control-stop");
        this.$controlBtn.addClass("btn-control-start");
        this.$controlBtn.text("Start");
    }
};
/* elements that creates code above:
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
    game.$controlBtn.click(function () {
        game.changeState();
    });

});




