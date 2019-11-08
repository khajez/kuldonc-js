import GameController from './components/Game/GameController/GameController.js';

class Main {
    constructor() {
        this.gameController = new GameController('init');
        this.gameLevelSelector = document.getElementById('gameLevel-cb');
        this.crNewGameBtn = document.getElementById('new-game-btn');
        this.gameLevelSelector.addEventListener('change', (e) => {
            console.log(e.target.value);
            e.target.value === "empty" ? this.crNewGameBtn.disabled = true : this.crNewGameBtn.disabled = false;
        } );
    
        this.crNewGameBtn.addEventListener('click', (e) => {
            const gameType = this.gameLevelSelector.options[this.gameLevelSelector.selectedIndex].value;
            console.log(gameType);
            this.gameController.createNewGameHandler(gameType);
        } );
    }
}
const main = new Main();