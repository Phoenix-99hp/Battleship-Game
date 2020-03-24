import Ship from "./Ship.js";

class Destroyer extends Ship {
    constructor(position, orientation) {
        super(position);
        this.type = "Destroyer";
        this.size = 3;
        this.orientation = orientation;
    };
};

export default Destroyer