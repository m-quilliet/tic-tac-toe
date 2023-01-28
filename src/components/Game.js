import React, {useState} from 'react'
import Square from "./Square"
import EndGame from './EndGame';

const INITIAL = "";
const X_PLAYER = "X";
const O_PLAYER = "O";

//les combinaisons gagnantes
const winCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function Game() {
    //la grille est initialement un tableau de 9 élément,et chaque élément est initialisé à 0
    const [grid, setGrid] = useState(Array(9).fill(INITIAL));

    const [player, setPlayer] = useState(false);

    //ajouter d'autres états
    const [gameFinished, setGameFinished]= useState(false);
    const [draw,setDraw] = useState(false);
    const [winCount, setwinCount] = useState({ X: 0,O: 0});


    function isGameOver(){
        if (!gameFinished){
        //verifier si X à gagné
            for (let i = 0; i < 8; i++ ) {
                if (
                    //le joueur x a une des combinaisons gagnantes
                    grid[winCombination[i][0]] === X_PLAYER &&
                    grid[winCombination[i][1]] === X_PLAYER &&
                    grid[winCombination[i][2]] === X_PLAYER 
                ) {
                    setGameFinished(true);
                    setwinCount({ ...winCount, X: winCount.X +1});
                    console.log('X WON');
                    return;
                }
            }

            //verifier si X à gagné
            for (let i = 0; i < 8; i++ ) {
                if (
                    //le joueur x a une des combinaisons gagnantes
                    grid[winCombination[i][0]] === O_PLAYER &&
                    grid[winCombination[i][1]] === O_PLAYER &&
                    grid[winCombination[i][2]] === O_PLAYER 
                ) {
                    setGameFinished(true);
                    setwinCount({ ...winCount, O: winCount.O +1});
                    console.log('O WON');
                    return;
                }
            }

            // va vérifier le tableau de grid
            // si la grille est pleine
            if(!grid.includes(INITIAL)) {
                setDraw(true);
                //et si le jeu est fini
                setGameFinished(true);
                console.log('DRAW');
            }        
        }
    }

    function restartGame() {
        //si les éléments sot ds leur état initial/ que le jeu n'est fini et que le dessin de grille non plus
        setGrid(Array(9).fill(INITIAL));
        setGameFinished(false);
        setDraw(false);
    }

    function clearHistory() {
        setwinCount({ X: 0, O: 0 });
        restartGame();
    }

    isGameOver();

    function handleClick(id) {
        setGrid(
             // sorte de carte de point
            grid.map((item,index) => {
                // fait correspondre l'index avec l'id
                if (index === id) {
                    if (player) {
                        return X_PLAYER;
                    } else {
                    return O_PLAYER;
                    }   
                } else {
                    return item;
                }             
            })
        );
         //changement de joueur et de sa lettre
        setPlayer(!player);
    }
    

    return (
        <div>
            <span className='win-history'>
                X victoire: {winCount.X}
                <br/>
                O victoire: {winCount.O}
            </span>
             {/* si le jeu est fini et   */}
            {gameFinished && (
                <EndGame 
                    winCount={winCount}
                    restartGame={restartGame}
                    player={player}
                    draw={draw}
                    clearHistory={clearHistory}
                /> 
            )}
             {/* // donne le nom que l'on veux à notre tableau  */}
            <Square clickedArray={grid} handleClick={handleClick}/>
        </div>
    );
}

export default Game

