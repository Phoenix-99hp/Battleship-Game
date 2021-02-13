import Ship from "./Ship.js";

class Battleship extends Ship {
    constructor(position, orientation) {
        super(position);
        this.type = "Battleship";
        this.orientation = orientation;
        this.size = 4;
    };
};

export default Battleship