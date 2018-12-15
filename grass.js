var LivingCreature = require("./LivingCreatures")

module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = Math.round(Math.random() * 8);
        this.speed = 8;
    }

    mul() {
        this.multiply++;
        var arr = this.yntrelVandak(1);
        this.direction = arr [Math.floor(Math.random() * arr.length)];
        if (this.multiply >= this.speed && this.direction) {
            var newGrass = new Grass(this.direction[0], this.direction[1], this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
}



