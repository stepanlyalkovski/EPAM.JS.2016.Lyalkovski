function Zombie(settings) {
    this._position = settings.position;
    this._endPoint = settings.endPoint;
    this._$zombie = $("<div class='zombie'></div>");
    this._$zombie.css('right', this._position);
    this.line = settings.line;

    this.speed = 1;
    this.hitPoints = 100;

    /* Send messages to core */
    this.subscribe = function(func) {
        this.notify = func;
    };

    $(".field-line").eq(this.line).append(this._$zombie);

    this.move = function() {
        this._position += this.speed;
        if(this._position < this._endPoint) {
            this._$zombie.css('right', this._position);
        } else {
            /* send message to core that zombie has reached the end of a field */
            this.notify();
        }
    };

    this.die = function() {
        this._$zombie.remove();
    };





}
