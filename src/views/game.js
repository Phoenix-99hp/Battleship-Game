const gamePage = (playerPositions, computerBoard) => {
	document.getElementById("content").innerHTML = `
    <header>Battleship</header>
    <div id="errorMsg">
            <button id="ok">OK</button>
        </div>
    <main id="mainContent">
        <div id="playerBoard">${playerPositions}</div>
    <div id="toast" class="hide">Text</div>
    <div id="computerContainer">
        <div id="computerBoard">${computerBoard}</div>
    </div>
    </main>`;
};

export default gamePage;
