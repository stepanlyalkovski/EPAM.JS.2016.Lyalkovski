function Zombie(settings) {
    var zombie = {};
    zombie.position = settings.position;
    zombie.endPoint = settings.endPoint;
    zombie.$line = settings.$line;
    zombie.$zombie = $("<div class='zombie'></div>");
    zombie.$zombie.css('right', this.position);
    zombie.speed = 1;
    zombie.hitPoints = 100;

    /* Send messages to core */
    this.subscribe = function(func) {
        zombie.notify = func;
    };

    this.move = function() {
        zombie.position += zombie.speed;
        if(zombie.position < zombie.endPoint) {
            zombie.$zombie.css('right', zombie.position);
        } else {
            /* send message to core that zombie has reached the end of a field */
            zombie.notify();
        }
    };

    this.die = function() {
        zombie.$zombie.remove();
    };

    zombie.$line.append(zombie.$zombie);

    return zombie;
}
