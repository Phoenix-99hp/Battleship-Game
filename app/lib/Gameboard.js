class Gameboard {
    constructor() {
        this.battleshipPosition = null;
        this.carrierPosition = null
        this.destroyerPosition = null;
        this.patrolPosition = null;
        this.submarinePosition = null;
        this.board = [];
    }

    generateBoard() {
        let letterIndex = 0;
        let numberIndex = 0;
        const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 0; i < 100; i++) {
            this.board[i] = letters[letterIndex] + numbers[numberIndex];
            letterIndex++;
            if (/9$/.test(i) === true) {
                numberIndex++;
                letterIndex = 0;
            }
        }
    }

    placeShips(battleship, carrier, destroyer, patrol, submarine) {
        this.battleshipPosition = battleship;
        this.carrierPosition = carrier;
        this.destroyerPosition = destroyer;
        this.patrolPosition = patrol;
        this.submarinePosition = submarine;
        for (let i = 0, j = 0; i < this.board.length; i++, j++) {
            if (j > 4) {
                j = 0;
            }
            if (this.board[i] === battleship[j]) {
                this.board.splice(i, 1, "Battleship");
            }
            else if (this.board[i] === carrier[j]) {
                this.board.splice(i, 1, "Carrier");
            }
            else if (this.board[i] === destroyer[j]) {
                this.board.splice(i, 1, "Destroyer");
            }
            else if (this.board[i] === patrol[j]) {
                this.board.splice(i, 1, "Patrol");
            }
            else if (this.board[i] === submarine[j]) {
                this.board.splice(i, 1, "Submarine");
            }
        }
    }
}

export default Gameboard