import Gameboard from "../lib/Gameboard.js";
import Player from "../lib/Player.js";
import CPU from "../lib/CPU.js";
import Battleship from "../lib/Battleship.js";
import Carrier from "../lib/Carrier.js";
import Destroyer from "../lib/Destroyer.js";
import Patrol from "../lib/Patrol.js";
import Submarine from "../lib/Submarine.js";
import initialPage from "./views/initial.js";
import placePage from "./views/place.js";
import gamePage from "./views/game.js";
import "../assets/css/style.css";

initialPage();
initializeGame();

function initializeGame() {
	const Player1 = new Player();

	Player1.Battleship = new Battleship();
	Player1.Carrier = new Carrier();
	Player1.Destroyer = new Destroyer();
	Player1.Patrol = new Patrol();
	Player1.Submarine = new Submarine();
	Player1.Gameboard = new Gameboard();

	const Computer = new CPU();

	Computer.Battleship = new Battleship();
	Computer.Carrier = new Carrier();
	Computer.Destroyer = new Destroyer();
	Computer.Patrol = new Patrol();
	Computer.Submarine = new Submarine();
	Computer.Gameboard = new Gameboard();

	const startBtn = document.getElementById("startBtn");

	startBtn.addEventListener("click", () => {
		Player1.Gameboard.generateBoard();
		let emptyPlayerBoard = generateEmptyBoard(Player1.Gameboard.board);
		placePage(emptyPlayerBoard);

		const battleship = document.getElementById("battleship");
		const carrier = document.getElementById("carrier");
		const destroyer = document.getElementById("destroyer");
		const patrol = document.getElementById("patrol");
		const submarine = document.getElementById("submarine");
		const shipsContainer = document.getElementById("shipsContainer");
		const ships = [battleship, carrier, destroyer, patrol, submarine];
		const rotateBtn = document.getElementById("rotate");
		const readyBtn = document.getElementById("ready");

		ships.forEach((ship) => {
			ship.orientation = "vertical";
		});

		rotateBtn.addEventListener("click", () => {
			ships.forEach((ship) => {
				let a = getComputedStyle(ship).height;
				let b = getComputedStyle(ship).width;
				if (ship.parentNode === shipsContainer) {
					switchOrientation(ship);
					ship.style.height = b;
					ship.style.width = a;
				}
			});
		});

		let dragged;

		ships.forEach((ship) => {
			ship.addEventListener("drag", function (event) {}, false);
			ship.addEventListener(
				"touchstart",
				function (event) {
					console.log("TS");
				},
				false
			);

			ship.addEventListener(
				"dragend",
				function (event) {
					event.target.style.opacity = "";
				},
				false
			);
			ship.addEventListener(
				"touchend",
				function (event) {
					event.target.style.opacity = "";
				},
				false
			);
		});

		document.addEventListener(
			"dragstart",
			function (event) {
				dragged = event.target;
				if (
					dragged == battleship ||
					dragged == carrier ||
					dragged == destroyer ||
					dragged == patrol ||
					dragged == submarine
				) {
					event.target.style.opacity = 0.5;
				}
			},
			false
		);

		document.addEventListener(
			"touchmove",
			function (event) {
				dragged = event.target;
				if (
					dragged == battleship ||
					dragged == carrier ||
					dragged == destroyer ||
					dragged == patrol ||
					dragged == submarine
				) {
					event.target.style.opacity = 0.5;
				}
			},
			false
		);

		document.addEventListener(
			"dragover",
			function (event) {
				event.preventDefault();
			},
			false
		);

		document.addEventListener(
			"drop",
			function (event) {
				event.preventDefault();
				if (
					event.target.classList.value.includes("dropzone") &&
					(dragged == battleship ||
						dragged == carrier ||
						dragged == destroyer ||
						dragged == patrol ||
						dragged == submarine)
				) {
					event.target.style.background = "none";
					dragged.parentNode.removeChild(dragged);
					if (event.target.classList.contains("square")) {
						dragged.style.marginTop = "0px";
						dragged.style.marginLeft = "0px";
						dragged.style.marginRight = "0px";
					} else {
						dragged.style.marginTop = "10px";
						dragged.style.marginLeft = "10px";
						dragged.style.marginRight = "0px";
					}
					event.target.appendChild(dragged);
					let info = getInfo(dragged);
					updatePlayerObject(info);

					function getInfo(ship) {
						return [ship.id, ship.orientation, event.target.id];
					}

					function updatePlayerObject(infoArr) {
						if (infoArr[0] === "battleship") {
							Player1.Battleship.orientation = infoArr[1];
							Player1.Battleship.position[0] = infoArr[2];
						} else if (infoArr[0] === "carrier") {
							Player1.Carrier.orientation = infoArr[1];
							Player1.Carrier.position[0] = infoArr[2];
						} else if (infoArr[0] === "destroyer") {
							Player1.Destroyer.orientation = infoArr[1];
							Player1.Destroyer.position[0] = infoArr[2];
						} else if (infoArr[0] === "patrol") {
							Player1.Patrol.orientation = infoArr[1];
							Player1.Patrol.position[0] = infoArr[2];
						} else if (infoArr[0] === "submarine") {
							Player1.Submarine.orientation = infoArr[1];
							Player1.Submarine.position[0] = infoArr[2];
						}
					}
				}
			},
			false
		);

		document.addEventListener(
			"touchend",
			function (event) {
				// event.preventDefault();
				if (
					event.target.classList.value.includes("dropzone") &&
					(dragged == battleship ||
						dragged == carrier ||
						dragged == destroyer ||
						dragged == patrol ||
						dragged == submarine)
				) {
					event.target.style.background = "none";
					dragged.parentNode.removeChild(dragged);
					if (event.target.classList.contains("square")) {
						dragged.style.marginTop = "0px";
						dragged.style.marginLeft = "0px";
						dragged.style.marginRight = "0px";
					} else {
						dragged.style.marginTop = "10px";
						dragged.style.marginLeft = "10px";
						dragged.style.marginRight = "0px";
					}
					event.target.appendChild(dragged);
					let info = getInfo(dragged);
					updatePlayerObject(info);

					function getInfo(ship) {
						return [ship.id, ship.orientation, event.target.id];
					}

					function updatePlayerObject(infoArr) {
						if (infoArr[0] === "battleship") {
							Player1.Battleship.orientation = infoArr[1];
							Player1.Battleship.position[0] = infoArr[2];
						} else if (infoArr[0] === "carrier") {
							Player1.Carrier.orientation = infoArr[1];
							Player1.Carrier.position[0] = infoArr[2];
						} else if (infoArr[0] === "destroyer") {
							Player1.Destroyer.orientation = infoArr[1];
							Player1.Destroyer.position[0] = infoArr[2];
						} else if (infoArr[0] === "patrol") {
							Player1.Patrol.orientation = infoArr[1];
							Player1.Patrol.position[0] = infoArr[2];
						} else if (infoArr[0] === "submarine") {
							Player1.Submarine.orientation = infoArr[1];
							Player1.Submarine.position[0] = infoArr[2];
						}
					}
				}
			},
			false
		);

		readyBtn.addEventListener("click", () => {
			const playerShips = [
				Player1.Battleship,
				Player1.Carrier,
				Player1.Destroyer,
				Player1.Patrol,
				Player1.Submarine,
			];
			if (addPlayerPositions(playerShips, Player1.Gameboard.board) === true) {
				fillGameboard(
					Player1.Battleship,
					Player1.Carrier,
					Player1.Destroyer,
					Player1.Patrol,
					Player1.Submarine,
					Player1.Gameboard.board
				);
				let computerShips = [
					Computer.Battleship,
					Computer.Carrier,
					Computer.Destroyer,
					Computer.Patrol,
					Computer.Submarine,
				];
				let playerBoard = generatePlayerBoard();
				Computer.Gameboard.generateBoard();
				getCPUOrientation();
				assignCPUPos(computerShips);
				let computerBoard = generateComputerBoard(Computer.Gameboard.board);
				gamePage(playerBoard, computerBoard);
				const gameTiles = document.querySelectorAll(".game");
				let concatCPUships = computerShips[0].position.concat(
					computerShips[1].position,
					computerShips[2].position,
					computerShips[3].position,
					computerShips[4].position
				);
				Player1.Gameboard.generateBoard();
				let cBoard = Computer.Gameboard.board;
				const errorMsg = document.getElementById("errorMsg");
				const mainC = document.getElementById("mainContent");
				gameTiles.forEach((tile) => {
					tile.addEventListener("click", () => {
						if (tile.classList.contains("game")) {
							tile.style.pointerEvents = "auto";
							for (let i = 0; i < concatCPUships.length; i++) {
								if (
									tile.innerText === "x" ||
									tile.innerText === "o" ||
									tile.innerText === "X"
								) {
									errorMsg.innerHTML = `
                                    <p>You can't select a position that is already taken</p>
                                    <button id="ok">OK</button>`;
									errorMsg.style.display = "block";
									document
										.getElementById("ok")
										.addEventListener("click", () => {
											errorMsg.style.display = "none";
										});
									initiateGame();
									break;
								} else if (
									tile.id === concatCPUships[i] &&
									tile.innerText === ""
								) {
									tile.innerText = "x";
									tile.style.backgroundColor = "red";
									concatCPUships.splice(i, 1);
									Player1.turn = false;
									hitOrMiss(tile.id, computerShips, Player1.Gameboard.board);
									Computer.turn = true;
									initiateGame();
									break;
								} else if (i === concatCPUships.length - 1) {
									tile.innerText = "o";
									tile.style.color = "blue";
									Player1.turn = false;
									hitOrMiss(tile.id, computerShips, Player1.Gameboard.board);
									Computer.turn = true;
									initiateGame();
									break;
								}
							}
						}
					});
				});
				determineFirstTurn();
				initiateGame();
				function initiateGame() {
					if (Computer.turn === true) {
						let filtered = cBoard.filter((item) => {
							if (/(- Hit)$/.test(item) === true) {
								return item;
							}
						});
						let e = filtered[Math.floor(Math.random() * filtered.length)];
						if (/(- Hit)$/.test(e) === true) {
							computerMakeMove(
								/\d$/.test(cBoard[cBoard.indexOf(e) + 1]),
								/\d$/.test(cBoard[cBoard.indexOf(e) - 1]),
								/\d$/.test(cBoard[cBoard.indexOf(e) + 10]),
								/\d$/.test(cBoard[cBoard.indexOf(e) - 10]),
								playerShips,
								e,
								cBoard,
								filtered
							);
						} else {
							let notHit = cBoard.filter((item) => {
								if (
									/(- Hit)$/.test(item) === false &&
									/(Miss)$/.test(item) === false &&
									/(Sunk)$/.test(item) === false
								) {
									return item;
								}
							});
							let move = notHit[Math.floor(Math.random() * notHit.length)];
							hitOrMiss(move, playerShips, cBoard);
						}
						Computer.turn = false;
						Player1.turn = true;
						initiateGame();
					}
				}
			} else {
				document.getElementById("errorMsg").innerHTML = `
                <p>One or more ships is improperly placed</p>
                <button id="ok">OK</button>`;
				document.getElementById("errorMsg").style.display = "block";
				document.getElementById("ok").addEventListener("click", () => {
					document.getElementById("errorMsg").style.display = "none";
				});
			}
		});
	});
	function generateEmptyBoard(board) {
		let generateHTML = `
        <div class="square label-top label-left" draggable="false"></div>
        <div class="square label-top" draggable="false">A</div>
        <div class="square label-top" draggable="false">B</div>
        <div class="square label-top" draggable="false">C</div>
        <div class="square label-top" draggable="false">D</div>
        <div class="square label-top" draggable="false">E</div>
        <div class="square label-top" draggable="false">F</div>
        <div class="square label-top" draggable="false">G</div>
        <div class="square label-top" draggable="false">H</div>
        <div class="square label-top" draggable="false">I</div>
        <div class="square label-top" draggable="false">J</div>`;
		let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		board.forEach((position) => {
			if (/A\d$|A\d\d$/.test(position) === true) {
				generateHTML += `<div class="square label-left" draggable="false">${nums[0]}</div><div id=${position} class="square dropzone"></div>`;
				nums.splice(0, 1);
			} else {
				generateHTML += `<div id=${position} class="square dropzone"></div>`;
			}
		});
		return generateHTML;
	}

	function switchOrientation(ship) {
		if (ship.orientation === "vertical") {
			ship.orientation = "horizontal";
		} else {
			ship.orientation = "vertical";
		}
	}

	function addPlayerPositions(ships, board) {
		ships.forEach((ship) => {
			const pos1 = ship.position[0];
			if (ship.orientation === "vertical") {
				for (let i = 1, j = 10; i < ship.size; i++) {
					ship.position[i] = board[board.indexOf(pos1) + j];
					j += 10;
				}
			} else if (ship.orientation === "horizontal") {
				for (let i = 1, j = 1; i < ship.size; i++) {
					ship.position[i] = board[board.indexOf(pos1) + j];
					j += 1;
				}
			}
		});
		let countPos = ships[0].position.concat(
			ships[1].position,
			ships[2].position,
			ships[3].position,
			ships[4].position
		);
		let valToRet = true;
		for (let q = 0; q < countPos.length; q++) {
			if (countPos.indexOf(countPos[q]) !== countPos.lastIndexOf(countPos[q])) {
				valToRet = false;
				break;
			}
		}
		if (
			countPos.length < 17 ||
			countPos.includes(undefined) === true ||
			countPos.includes(null) === true
		) {
			return false;
		} else {
			return valToRet;
		}
	}

	function fillGameboard(b, c, d, p, s, board) {
		b.position.forEach((pos) => {
			let boardPos = board.indexOf(pos);
			board.splice(boardPos, 1, "Battleship");
		});
		c.position.forEach((pos) => {
			let boardPos = board.indexOf(pos);
			board.splice(boardPos, 1, "Carrier");
		});
		d.position.forEach((pos) => {
			let boardPos = Player1.Gameboard.board.indexOf(pos);
			board.splice(boardPos, 1, "Destroyer");
		});
		p.position.forEach((pos) => {
			let boardPos = Player1.Gameboard.board.indexOf(pos);
			board.splice(boardPos, 1, "Patrol");
		});
		s.position.forEach((pos) => {
			let boardPos = board.indexOf(pos);
			board.splice(boardPos, 1, "Submarine");
		});
	}

	function checkForOverlap(arr) {
		const combinedArr = arr[0].position.concat(
			arr[1].position,
			arr[2].position,
			arr[3].position,
			arr[4].position
		);
		combinedArr.forEach((item) => {
			if (combinedArr.lastIndexOf(item) !== combinedArr.indexOf(item)) {
				let x = combinedArr.lastIndexOf(item);
				if (x > 0 && x <= 3) {
					arr[0].position.splice(0);
				} else if (x > 3 && x < 9) {
					arr[1].position.splice(0);
				} else if (x >= 9 && x < 12) {
					arr[2].position.splice(0);
				} else if (x >= 12 && x < 14) {
					arr[3].position.splice(0);
				} else if (x >= 14 && x < 17) {
					arr[4].position.splice(0);
				}
			}
		});
	}

	function checkIfReady(arr) {
		let check = true;
		for (let i = 0; i < arr.length; i++) {
			if (check === false) {
				break;
			}
			for (let j = 0; j < arr[i].size; j++) {
				if (check === false) {
					break;
				} else if (/\d$/.test(arr[i].position[j]) === true) {
					continue;
				} else {
					check = false;
					break;
				}
			}
		}
		return check;
	}

	function getCPUOrientation() {
		let arr = [];
		for (let i = 0; i < 5; i++) {
			arr[i] = Math.floor(Math.random() * 2);
			if (arr[i] === 0) {
				arr[i] = "Vertical";
			} else {
				arr[i] = "Horizontal";
			}
		}
		Computer.Battleship.orientation = arr[0];
		Computer.Carrier.orientation = arr[1];
		Computer.Destroyer.orientation = arr[2];
		Computer.Patrol.orientation = arr[3];
		Computer.Submarine.orientation = arr[4];
	}

	function assignCPUPos(arr, currentDir) {
		let board = Computer.Gameboard.board;
		for (let j = 0; j < arr.length; j++) {
			let direction = currentDir || Math.floor(Math.random() * 2);
			if (/(Sunk)$/.test(arr[j].position[0]) === true) {
				continue;
			} else if (
				/\d$/.test(arr[j].position[0]) === false &&
				/(- Hit)$/.test(arr[j].position[0]) === false &&
				/(Sunk)$/.test(arr[j].position[0]) === false
			) {
				arr[j].position[0] = board[Math.floor(Math.random() * board.length)];
			}
			for (let i = 1; i < arr[j].size; i++) {
				if (
					/\d$/.test(arr[j].position[i - 1] === false) &&
					/(- Hit)$/.test(arr[j].position[i - 1] === false) &&
					i >= 2
				) {
					arr[j].splice(1);
					i = 1;
				} else if (arr[j].orientation === "Horizontal") {
					if (
						(direction === 0 &&
							/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) + 1]) ===
								false) ||
						(/^J/i.test(board[board.indexOf(arr[j].position[i - 1])]) ===
							true &&
							/^A/i.test(board[board.indexOf(arr[j].position[i - 1]) + 1]) ===
								true)
					) {
						direction = 1;
						handleDirectionChange(direction, 1, arr);
					} else if (
						direction === 0 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) + 1]) ===
							true
					) {
						arr[j].position[i] =
							board[board.indexOf(arr[j].position[i - 1]) + 1];
					} else if (
						(direction === 1 &&
							/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) - 1]) ===
								false) ||
						(/^A/i.test(board[board.indexOf(arr[j].position[i - 1])]) ===
							true &&
							/^J/i.test(board[board.indexOf(arr[j].position[i - 1]) - 1]) ===
								true)
					) {
						direction = 0;
						handleDirectionChange(direction, 1, arr);
					} else if (
						direction === 1 &&
						/\d$/i.test(board[board.indexOf(arr[j].position[i - 1]) - 1]) ===
							true
					) {
						arr[j].position[i] =
							board[board.indexOf(arr[j].position[i - 1]) - 1];
					}
				} else if (arr[j].orientation === "Vertical") {
					if (
						direction === 0 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) + 10]) ===
							false
					) {
						direction = 1;
						handleDirectionChange(direction, 10, arr);
					} else if (
						direction === 0 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) + 10]) ===
							true
					) {
						arr[j].position[i] =
							board[board.indexOf(arr[j].position[i - 1]) + 10];
					} else if (
						direction === 1 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) - 10]) ===
							false
					) {
						direction = 0;
						handleDirectionChange(direction, 10, arr);
					} else if (
						direction === 1 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) - 10]) ===
							true
					) {
						arr[j].position[i] =
							board[board.indexOf(arr[j].position[i - 1]) - 10];
					}
				}

				function handleDirectionChange(dir, num, arr) {
					if (
						dir === 0 &&
						/\d$/.test(
							board[board.indexOf(arr[j].position[i - 1]) + num] === false
						)
					) {
						arr[j].position.splice(0);
						assignCPUPos(arr, dir);
					} else if (
						dir === 0 &&
						board[board.indexOf(arr[j].position[i - 1])] !==
							board[arr[j].position[0]]
					) {
						arr[j].position.splice(0);
						assignCPUPos(arr, dir);
					} else if (
						dir === 0 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) + num]) ===
							true
					) {
						arr[j].position[i] =
							board[board.indexOf(arr[j].position[i - 1]) + num];
					} else if (
						dir === 1 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) - num]) ===
							false
					) {
						arr[j].position.splice(0);
						assignCPUPos(arr, dir);
					} else if (
						dir === 1 &&
						board[board.indexOf(arr[j].position[i - 1])] !==
							board[arr[j].position[0]]
					) {
						arr[j].position.splice(0);
						assignCPUPos(arr, dir);
					} else if (
						dir === 1 &&
						/\d$/.test(board[board.indexOf(arr[j].position[i - 1]) - num]) ===
							true
					) {
						arr[j].position[i] = board[board.indexOf(arr[j].position[i]) - num];
					}
				}
			}
		}
		checkForOverlap(arr);
		let ready = checkIfReady(arr);
		if (ready === true) {
		} else {
			assignCPUPos(arr);
		}
	}

	function generatePlayerBoard() {
		let generateHTML = `
        <div class="square label-top-mini label-left-mini" draggable="false"></div>
        <div class="square label-top-mini" draggable="false">A</div>
        <div class="square label-top-mini" draggable="false">B</div>
        <div class="square label-top-mini" draggable="false">C</div>
        <div class="square label-top-mini" draggable="false">D</div>
        <div class="square label-top-mini" draggable="false">E</div>
        <div class="square label-top-mini" draggable="false">F</div>
        <div class="square label-top-mini" draggable="false">G</div>
        <div class="square label-top-mini" draggable="false">H</div>
        <div class="square label-top-mini" draggable="false">I</div>
        <div class="square label-top-mini" draggable="false">J</div>`;
		let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		let boardPositions = generateBoardPositions();
		for (let i = 0; i < Player1.Gameboard.board.length; i++) {
			if (/A\d$|A\d\d$/.test(Player1.Gameboard.board[i]) === true) {
				generateHTML += `<div class="square label-left-mini" draggable="false">${nums[0]}</div><div id="${boardPositions[i]}" class="square game-tile ${Player1.Gameboard.board[i]}"></div>`;
				nums.splice(0, 1);
			} else if (/\w$/.test(Player1.Gameboard.board[i]) === true) {
				if (/0$/.test(i) === true) {
					generateHTML += `<div class="square label-left-mini" draggable="false">${nums[0]}</div><div id="${boardPositions[i]}" class="square game-tile ${Player1.Gameboard.board[i]}"></div>`;
					nums.splice(0, 1);
				} else {
					generateHTML += `<div id="${boardPositions[i]}" class="square game-tile ${Player1.Gameboard.board[i]}"></div>`;
				}
			} else {
				generateHTML += `<div id="${boardPositions[i]}" class="square game-tile ${Player1.Gameboard.board[i]}"></div>`;
			}
		}
		return generateHTML;
	}

	function generateComputerBoard(board) {
		let generateHTML = `
        <div class="square label-top label-left" draggable="false"></div>
        <div class="square label-top" draggable="false">A</div>
        <div class="square label-top" draggable="false">B</div>
        <div class="square label-top" draggable="false">C</div>
        <div class="square label-top" draggable="false">D</div>
        <div class="square label-top" draggable="false">E</div>
        <div class="square label-top" draggable="false">F</div>
        <div class="square label-top" draggable="false">G</div>
        <div class="square label-top" draggable="false">H</div>
        <div class="square label-top" draggable="false">I</div>
        <div class="square label-top" draggable="false">J</div>`;
		let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		board.forEach((position) => {
			if (/A\d$|A\d\d$/.test(position) === true) {
				generateHTML += `<div class="square label-left" draggable="false">${nums[0]}</div><div id=${position} class="square game"></div>`;
				nums.splice(0, 1);
			} else if (/10/.test(position) === true) {
				generateHTML += `<div id=${position} class="square game bottom"></div>`;
			} else {
				generateHTML += `<div id=${position} class="square game"></div>`;
			}
		});
		return generateHTML;
	}

	function determineFirstTurn() {
		const toast = document.getElementById("toast");
		// let turn = Math.floor(Math.random() * 2);
		let turn = 0;
		if (turn === 0) {
			Player1.turn = true;
			toast.classList.remove("hide");
			toast.innerText =
				"Your turn - click a position on the empty board to attack";
		} else {
			Computer.turn = true;
		}
	}

	function computerMakeMove(a, b, c, d, arr, e, cBoard, filt) {
		let move;
		let num;

		let notHit = cBoard.filter((item) => {
			if (
				/(- Hit)$/.test(item) === false &&
				/(Miss)$/.test(item) === false &&
				/(- Sunk)$/.test(item) === false
			) {
				return item;
			}
		});
		if (e === undefined) {
			move = notHit[Math.floor(Math.random() * notHit.length)];
			hitOrMiss(move, arr, cBoard);
		}
		if (
			/^A/.test(cBoard[cBoard.indexOf(e)]) === true &&
			/^J/.test(cBoard[cBoard.indexOf(e) - 1]) === true
		) {
			b = false;
		}
		if (
			/^J/.test(cBoard[cBoard.indexOf(e)]) === true &&
			/^A/.test(cBoard[cBoard.indexOf(e) + 1]) === true
		) {
			a = false;
		}
		if (cBoard.includes(e)) {
			if (a && b && c && d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					num = Math.floor(Math.random() * 2);
					if (num === 0) {
						move = cBoard[cBoard.indexOf(e) + 1];
						hitOrMiss(move, arr, cBoard);
					} else if (num === 1) {
						move = cBoard[cBoard.indexOf(e) - 1];
						hitOrMiss(move, arr, cBoard);
					}
				} else if (num === 1) {
					num = Math.floor(Math.random() * 2);
					if (num === 0) {
						num = Math.floor(Math.random() * 2);
						if (num === 0) {
							move = cBoard[cBoard.indexOf(e) + 10];
							hitOrMiss(move, arr, cBoard);
						} else if (num === 1) {
							move = cBoard[cBoard.indexOf(e) - 10];
							hitOrMiss(move, arr, cBoard);
						}
					}
				}
			} else if (a && b && c && !d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					num = Math.floor(Math.random() * 2);
					if (num === 0) {
						move = cBoard[cBoard.indexOf(e) + 1];
						hitOrMiss(move, arr, cBoard);
					} else if (num === 1) {
						move = cBoard[cBoard.indexOf(e) - 1];
						hitOrMiss(move, arr, cBoard);
					}
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) + 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (a && b && d && !c) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					num = Math.floor(Math.random() * 2);
					if (num === 0) {
						move = cBoard[cBoard.indexOf(e) + 1];
						hitOrMiss(move, arr, cBoard);
					} else if (num === 1) {
						move = cBoard[cBoard.indexOf(e) - 1];
						hitOrMiss(move, arr, cBoard);
					}
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) - 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (b && c && d && !a) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) - 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					num = Math.floor(Math.random() * 2);
					if (num === 0) {
						move = cBoard[cBoard.indexOf(e) + 10];
						hitOrMiss(move, arr, cBoard);
					} else if (num === 1) {
						move = cBoard[cBoard.indexOf(e) - 10];
						hitOrMiss(move, arr, cBoard);
					}
				}
			} else if (a && c && d && !b) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) + 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					num = Math.floor(Math.random() * 2);
					if (num === 0) {
						move = cBoard[cBoard.indexOf(e) + 10];
						hitOrMiss(move, arr, cBoard);
					} else if (num === 1) {
						move = cBoard[cBoard.indexOf(e) - 10];
						hitOrMiss(move, arr, cBoard);
					}
				}
			} else if (a && b && !c && !d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) + 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) - 1];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (!a && !b && c && d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) + 10];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) - 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (a && !b && c && !d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) + 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) + 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (a && !b && !c && d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) + 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) - 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (!a && b && c && !d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) - 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) + 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (a && !b && !c && d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) + 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) - 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (!a && b && !c && d) {
				num = Math.floor(Math.random() * 2);
				if (num === 0) {
					move = cBoard[cBoard.indexOf(e) - 1];
					hitOrMiss(move, arr, cBoard);
				} else if (num === 1) {
					move = cBoard[cBoard.indexOf(e) - 10];
					hitOrMiss(move, arr, cBoard);
				}
			} else if (a && !b && !c && !d) {
				move = cBoard[cBoard.indexOf(e) + 1];
				hitOrMiss(move, arr, cBoard);
			} else if (b && !a && !c && !d) {
				move = cBoard[cBoard.indexOf(e) - 1];
				hitOrMiss(move, arr, cBoard);
			} else if (!a && !b && c && !d) {
				move = cBoard[cBoard.indexOf(e) + 10];
				hitOrMiss(move, arr, cBoard);
			} else if (!a && !b && !c && d) {
				move = cBoard[cBoard.indexOf(e) - 10];
				hitOrMiss(move, arr, cBoard);
			} else if (!a && !b && !c && !d) {
				filt.splice(filt.indexOf(e), 1);
				let y = filt[Math.floor(Math.random() * filt.length)];
				computerMakeMove(
					/\d$/.test(cBoard[cBoard.indexOf(y) + 1]),
					/\d$/.test(cBoard[cBoard.indexOf(y) - 1]),
					/\d$/.test(cBoard[cBoard.indexOf(y) + 10]),
					/\d$/.test(cBoard[cBoard.indexOf(y) - 10]),
					arr,
					y,
					cBoard,
					filt
				);
			} else {
				let y = cBoard.filter((pos) => {
					if (
						/(- Hit)$/.test(pos) === false &&
						pos !== "Miss" &&
						/(- Sunk)$/.test(pos) === false
					) {
						return pos;
					}
				});
				move = y[Math.floor(Math.random() * y.length)];
				hitOrMiss(move, arr, cBoard);
			}
		}
	}

	function checkHit(guess, arr) {
		let hit = false;
		let shouldBreak = false;
		for (let i = 0; i < arr.length; i++) {
			if (shouldBreak === true) {
				break;
			}
			for (let j = 0; j < arr[i].position.length; j++) {
				if (guess === arr[i].position[j]) {
					arr[i].position.splice(j, 1, guess + " - Hit");
					hit = true;
					shouldBreak = true;
					break;
				}
			}
		}
		return hit;
	}

	function checkSunk(arr, mv) {
		let sunk = false;
		let h = 0;
		let p = "";
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].position[arr[i].position.length - 1] === "Sunk") {
				continue;
			} else {
				let x = arr[i].position.filter((item) => {
					if (/(- Hit)$/.test(item) === true) {
						return item;
					}
				});
				if (
					arr[i].position[x.length - 1] ===
					arr[i].position[arr[i].position.length - 1]
				) {
					p = i;
					break;
				}
			}
		}
		if (/\d/.test(p) === true) {
			for (let j = 0; j < arr[p].position.length; j++) {
				if (/(- Hit)$/.test(arr[p].position[j]) === false) {
					h = 0;
					break;
				}
				if (/(- Hit)$/.test(arr[p].position[j]) === true) {
					h++;
				}
				if (
					/(- Hit)$/.test(arr[p].position[j]) === true &&
					h === arr[p].position.length
				) {
					sunk = true;
					break;
				}
			}
		}
		return {
			sunk: sunk,
			index: p,
		};
	}

	function hitOrMiss(mv, shipArr, board) {
		let hitStatus = checkHit(mv, shipArr);
		let playerBoard = document.getElementById("playerBoard");
		if (hitStatus === true) {
			let sunkStatus = checkSunk(shipArr, mv);
			if (board === Player1.Gameboard.board && sunkStatus.sunk === false) {
				board.splice(board.indexOf(mv), 1, mv + " - Hit");
				toast.classList.remove("hide");
				toast.style.color = "red";
				toast.innerText = "Hit";
				async function waitForTimeout() {
					const toast = document.getElementById("toast");
					await timeout(1000);
					toast.classList.add("hide");
				}
				waitForTimeout();
			} else if (
				board === Computer.Gameboard.board &&
				sunkStatus.sunk === false
			) {
				board.splice(board.indexOf(mv), 1, mv + " - Hit");
				for (let i = 10; i < playerBoard.children.length; i++) {
					if (mv === playerBoard.children[i].id) {
						playerBoard.children[i].innerText = "x";
						playerBoard.children[i].style.color = "red";
					}
				}
			} else if (sunkStatus.sunk === true) {
				board.splice(board.indexOf(mv), 1, mv + " - Hit");

				for (let n = 0; n < shipArr[sunkStatus.index].position.length; n++) {
					if (
						shipArr[sunkStatus.index].position[n].match(/^(\w10)/i) !== null
					) {
						board.splice(
							board.indexOf(shipArr[sunkStatus.index].position[n]),
							1,
							shipArr[sunkStatus.index].position[n].match(/^(\w10)/i)[0] +
								" - Sunk"
						);
					} else {
						board.splice(
							board.indexOf(shipArr[sunkStatus.index].position[n]),
							1,
							shipArr[sunkStatus.index].position[n].match(/^(\w\d)/i)[0] +
								" - Sunk"
						);
					}
					shipArr[sunkStatus.index].position[n] = "Sunk";
				}

				function colorSunkPos(cp) {
					let colorSunk = board.filter((pos) => {
						if (/(Sunk)$/.test(pos) === true) {
							return pos;
						}
					});
					for (let i = 10; i < cp.children.length; i++) {
						for (let j = 0; j < colorSunk.length; j++) {
							if (colorSunk[j].match(/^(\w10)/i) !== null) {
								if (colorSunk[j].match(/^(\w10)/i)[0] === cp.children[i].id) {
									cp.children[i].innerText = "X";
									cp.children[i].style.color = "black";
									cp.children[i].style.backgroundColor = "orangered";
								}
							} else if (
								colorSunk[j].match(/^(\w\d -)/i)[0].match(/^(\w\d)/i)[0] ===
								cp.children[i].id
							) {
								cp.children[i].innerText = "X";
								cp.children[i].style.color = "black";
								cp.children[i].style.backgroundColor = "orangered";
							}
						}
					}
				}
				if (board === Player1.Gameboard.board) {
					colorSunkPos(computerBoard);
					toast.classList.remove("hide");
					toast.style.color = "orangered";
					toast.innerText = "Ship sunk!";
					async function waitForTimeout() {
						const toast = document.getElementById("toast");
						await timeout(1000);
						toast.classList.add("hide");
						checkWin("You", shipArr);
					}
					waitForTimeout();
				} else if (board === Computer.Gameboard.board) {
					colorSunkPos(playerBoard);
					checkWin("The Computer", shipArr);
				}
			}
		} else {
			board.splice(board.indexOf(mv), 1, "Miss");
			if (board === Player1.Gameboard.board) {
				toast.classList.remove("hide");
				toast.style.color = "blue";
				toast.innerText = "Miss";
				async function waitForTimeout() {
					const toast = document.getElementById("toast");
					await timeout(1000);
					toast.classList.add("hide");
				}
				waitForTimeout();
			} else if (board === Computer.Gameboard.board) {
				for (let i = 10; i < playerBoard.children.length; i++) {
					if (mv === playerBoard.children[i].id) {
						playerBoard.children[i].innerText = "o";
						playerBoard.children[i].style.color = "blue";
					}
				}
			}
		}
	}

	function generateBoardPositions() {
		let letterIndex = 0;
		let numberIndex = 0;
		const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const generatedBoard = [];
		for (let i = 0; i < 100; i++) {
			generatedBoard[i] = letters[letterIndex] + numbers[numberIndex];
			letterIndex++;
			if (/9$/.test(i) === true) {
				numberIndex++;
				letterIndex = 0;
			}
		}
		return generatedBoard;
	}

	function timeout(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function checkWin(player, arr) {
		let won = false;
		let hitCount = 0;
		for (let i = 0; i < arr.length; i++) {
			for (let j = 0; j < arr[i].position.length; j++) {
				if (arr[i].position[j] === "Sunk") {
					hitCount++;
				}
				if (arr[i].position[j] === "Sunk" && hitCount === 17) {
					won = true;
				}
			}
		}
		if (won) {
			toast.classList.remove("hide");
			toast.style.color = "black";
			toast.innerText = `${player} won!`;
			async function waitForTimeout() {
				const toast = document.getElementById("toast");
				await timeout(3000);
				toast.classList.add("hide");
				initialPage();
				initializeGame();
			}
			waitForTimeout();
		} else {
			return false;
		}
	}
}
