function Zombie(settings) {
    var zombie = {};
    zombie._position = settings.position;
    zombie._endPoint = settings.endPoint;
    zombie.$line = settings.$line;
    zombie._$zombie = $("<div class='zombie'></div>");
    zombie._$zombie.css('right', this._position);
    zombie.speed = 1;
    zombie.hitPoints = 100;

    /* Send messages to core */
    this.subscribe = function(func) {
        zombie.notify = func;
    };

    this.move = function() {
        zombie._position += zombie.speed;
        if(zombie._position < zombie._endPoint) {
            zombie._$zombie.css('right', zombie._position);
        } else {
            /* send message to core that zombie has reached the end of a field */
            zombie.notify();
        }
    };

    this.die = function() {
        zombie._$zombie.remove();
    };

    zombie.$line.append(zombie._$zombie);

    return zombie;
}
