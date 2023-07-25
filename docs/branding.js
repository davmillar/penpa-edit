const Branding = {
    // For messages speaking in the first person
    appOwner: "GMPuzzles",
    // For dismissing popups
    okButtonText: "OK",
    // Titles specific to popup types
    errorTitle: "Error",
    infoTitle: "GMPuzzles says",

    solveTitle: "Congratulations!",
    solveDefaultMessage: "The solution is correct.",
    solveOKButtonText: "Hurray!",

    incorrectMessage: "Keep trying!",

    // Usage Button Amendments
    addUsageButtons: {
        "Submission Rules for GMPuzzles": "https://tinyurl.com/GMPuzzlesFormatting"
    }
};

(function  () {
    const usageButtons = document.getElementById('usageButtons');
    for (let buttonName in Branding.addUsageButtons) {
        let button = document.createElement('a');
        button.setAttribute('href', Branding.addUsageButtons[buttonName]);
        button.setAttribute('target', '_blank');
        button.classList.add('button');
        button.textContent = buttonName;
        usageButtons.appendChild(button);
    }
})();