import {GamesByType} from '../../../services/GameProvider/GamesByType.js';
import GameProviderLocal from '../../../services/GameProvider/GameProviderLocal.js';

export default class GameController {

    constructor(m) {
      this.game = null;
      this.gameProvider = new GameProviderLocal();
      //console.log(m);

    }

    gameLevelSelectedHandler = () => {

    }

    createNewGameHandler = (type) => {
        this.game = this.gameProvider.createGame(type);
        this.gameBoard = document.querySelector('.game-board');
        this.gameBoard.innerHTML = this.generateTable(this.game);
/*         this.gameBoard.innerHTML = `<tr>
        <td>
          <div class="card">
            <div class="front">1</div>
            <div class="back"></div>
          </div>
        </td>
      </tr>`;
 */
    }

    generateTable(game) {

        return  `${game.map(row => `
        <tr>
          ${row.map(cell => `
            <td>
              <div class="card">
                <div class="front">${cell === 0 ? '' : cell}</div>
                <div class="back"></div>
              </div>
            </td>
          `).join('')}
        </tr>
      `).join('')}`;
    }

    saveGame(game) {

    }
}

