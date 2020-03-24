import Ship from "./Ship.js";

class Submarine extends Ship {
    constructor(position, orientation) {
        super(position);
        this.type = "Submarine";
        this.size = 3;
        this.orientation = orientation;
    };
};

export default Submarine