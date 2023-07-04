const PenpaUI = {
    set_all_modes_hidden(hidden) {
        const allModes = penpa_modes.square;
        for (var i of allModes.mode) {
            document.getElementById("mo_" + i + "_lb").classList.toggle('is_hidden', hidden);
            document.getElementById(`mode-toolbar-${i}`).classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.sub) {
            document.getElementById("sub_" + i + "_lb").classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.customcolor) {
            document.getElementById(i).classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.ms) {
            document.getElementById("ms_" + i).parentElement.classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.ms1) {
            document.getElementById("ms1_" + i).parentElement.classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.ms3) {
            document.getElementById("ms3_" + i).parentElement.classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.shapemodes) {
            document.getElementById(i).classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.combisub) {
            document.getElementById("combisub_" + i).parentElement.classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.subcombi) {
            document.getElementById(i).classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.top_buttons) {
            document.getElementById(i).classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.exceptions) {
            document.getElementById(i).classList.toggle('is_hidden', hidden);
        }
        for (var i of allModes.li) {
            document.getElementById("li_" + i).classList.toggle('is_hidden', hidden);
        }
    },

    set_visible_modes_by_gridtype(gridtype) {
        const allPossible = penpa_modes.square;
        const selectedGrid = penpa_modes[gridtype];

        // One time operation when the grid is created
        // Remove all modes, square grid is the reference as it has all the modes
        for (var i of allPossible.mode) {
            document.getElementById("mo_" + i + "_lb").classList.toggle('is_hidden', selectedGrid.mode.indexOf(i) < 0);
            document.getElementById(`mode-toolbar-${i}`).classList.toggle('is_hidden', selectedGrid.mode.indexOf(i) < 0);
        }
        for (var i of allPossible.sub) {
            document.getElementById("sub_" + i + "_lb").classList.toggle('is_hidden', selectedGrid.sub.indexOf(i) < 0);
        }
        for (var i of allPossible.customcolor) {
            document.getElementById(i).classList.toggle('is_hidden', selectedGrid.customcolor.indexOf(i) < 0);
        }
        for (var i of allPossible.ms) {
            document.getElementById("ms_" + i).parentElement.classList.toggle('is_hidden', selectedGrid.ms.indexOf(i) < 0);
        }
        for (var i of allPossible.ms1) {
            document.getElementById("ms1_" + i).parentElement.classList.toggle('is_hidden', selectedGrid.ms1.indexOf(i) < 0);
        }
        for (var i of allPossible.ms3) {
            document.getElementById("ms3_" + i).parentElement.classList.toggle('is_hidden', selectedGrid.ms3.indexOf(i) < 0);
        }
        for (var i of allPossible.shapemodes) {
            document.getElementById(i).classList.toggle('is_hidden', selectedGrid.shapemodes.indexOf(i) < 0);
        }
        for (var i of allPossible.combisub) {
            document.getElementById("combisub_" + i).parentElement.classList.toggle('is_hidden', selectedGrid.combisub.indexOf(i) < 0);
        }
        for (var i of allPossible.subcombi) {
            document.getElementById(i).classList.toggle('is_hidden', selectedGrid.subcombi.indexOf(i) < 0);
        }
        for (var i of allPossible.top_buttons) {
            document.getElementById(i).classList.toggle('is_hidden', selectedGrid.top_buttons.indexOf(i) < 0);
        }
        for (var i of allPossible.exceptions) {
            document.getElementById(i).classList.toggle('is_hidden', selectedGrid.exceptions.indexOf(i) < 0);
        }
    },

    _toolModes: [
        'surface',
        'line',
        'lineE',
        'wall',
        'cage',
        'board',
        'move',
        'number',
        'sudoku',
        'symbol',
        'special',
        'combi'
    ],

    buildModeButtons: function () {
        const modeToolbar = document.getElementById('mode-toolbar');
        this._toolModes.forEach(toolName => {
            const toolButton = document.createElement('button');
            toolButton.innerHTML = `<svg><use href="icons.svg#${toolName}" width="100%" height="100%" /></svg>`;
            toolButton.setAttribute('id', `mode-toolbar-${toolName}`);
            modeToolbar.appendChild(toolButton);
        });
    }
};

(()=>{
    PenpaUI.buildModeButtons();
    // Testing...
    document.getElementById('app-container').classList.add('pocket');
})();