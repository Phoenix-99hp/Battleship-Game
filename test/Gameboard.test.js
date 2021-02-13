import Gameboard from "../lib/Gameboard.js";

test("Can set initial gameboard", () => {
    const g = new Gameboard();
    g.generateBoard();
    expect(g.board[0]).toBe("A1");
    expect(g.board[9]).toBe("J1");
    expect(g.board[10]).toBe("A2");
    expect(g.board[11]).toBe("B2");
    expect(g.board[19]).toBe("J2");
    expect(g.board[99]).toBe("J10");
});