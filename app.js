//DOM elements
const DOMStrings = {
    score: '.value',
    paper: '.paper',
    scissors: '.scissors',
    rock: '.rock',
    rules: '.rules',
    ruleBox: '.rules-container',
    closeBtn: '.cross-btn',
    gameOptionsItems: '.game-options > div',
    gameOptions: '.game-options',
}

//fade rules box
document.querySelector(DOMStrings.rules).addEventListener('click', () => {
    document.querySelector(DOMStrings.ruleBox).style = 'opacity:1;pointer-events: auto;';
})

//close rules box
document.querySelector(DOMStrings.closeBtn).addEventListener('click', () => {
    document.querySelector(DOMStrings.ruleBox).style = 'opacity:0'
})

//choosing option

const picked = document.querySelectorAll(DOMStrings.gameOptionsItems);

function init() {
    picked.forEach((current) => {
        current.addEventListener('click', () => {
            document.querySelector(DOMStrings.gameOptions).classList.toggle('active')
        })
    })


}

init();