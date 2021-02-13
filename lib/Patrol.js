import Ship from "./Ship.js";

class Patrol extends Ship {
    constructor(position, orientation) {
        super(position);
        this.type = "Patrol";
        this.size = 2;
        this.orientation = orientation;
    };
};

export default Patrol