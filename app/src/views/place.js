const placePage = (positions) => {
    document.getElementById("content").innerHTML = `
    <header>Battleship</header>
    <div id="errorMsg">
         <button id="ok">OK</button>
    </div>
    <main id="mainContent">
        <div id="placeBoard">${positions}</div>
        <div id="shipsContainer" class="dropzone">
            <div id="buttonContainer">
                <button id="rotate">Rotate Ships</button>
                <p id="drag">Drag ships to board to place positions</p>
                <button id="ready">Ready</button>
            </div>
            <div class="ship" id="battleship" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
            <div class="ship" id="carrier" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
            <div class="ship" id="destroyer" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
            <div class="ship" id="patrol" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
            <div class="ship" id="submarine" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)"></div>
        </div>
    </main>`;
}

export default placePage