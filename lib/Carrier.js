import Ship from "./Ship.js";

class Carrier extends Ship {
    constructor(position, orientation) {
        super(position);
        this.type = "Carrier";
        this.size = 5;
        this.orientation = orientation;
    };
};

export default Carrier