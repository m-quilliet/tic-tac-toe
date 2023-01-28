import React from 'react'

function EndGame({ clearHistory, winCount, restartGame, player, draw }) {
    return (
        <div className='end-game-screen'>
            {!draw && <span className='win-text'>{player ? "O GAGNE" : "X GAGNE"}</span>}
            {draw && <span className='win-text'>EGALITE</span>}
            {/* // au clic fait appelle à la fonction restart */}

            <span className="win-history">
                X a gagné: {winCount.X} fois
                <br />
                O a gagné: {winCount.O} fois
            </span>

            <button className="btn" onClick={restartGame}>
                REJOUER
            </button>
            <button className="btn" onClick={clearHistory}>
                EFFACER
            </button>
            </div>
        );
    }

export default EndGame