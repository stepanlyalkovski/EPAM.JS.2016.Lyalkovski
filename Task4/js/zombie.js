function Zombie(settings) {
    this._position = settings.position;
    this.speed = 1;
    this.hitPoints = 100;
    this.type = "default";

    this.move = function() {
        this._position += this.speed;
        return this._position;
    };

    this.die = function() {
        console.log("die");
    };
}
