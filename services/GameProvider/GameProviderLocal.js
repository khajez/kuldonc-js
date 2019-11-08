import {GamesByType} from './GamesByType.js';


export default class GameProviderLocal {
    constructor() {

    }

    createGame = (type) => {
        let game;
        switch(type) {
            case GamesByType.EASY.name: 
                game = GamesByType.EASY.game;
            break;
            case GamesByType.MODERATE.name: 
                game = GamesByType.MODERATE.game;
            break;
            case GamesByType.DIFFICULT.name: 
                game = GamesByType.DIFFICULT.game;
            break;
            default: 
                game = null;
            break;
        }

        return game;

    }

    saveGame = (game) => {

    }

    loadGame = (game) => {

    }

}