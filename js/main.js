const gameBoard = (() => {

    const boardContainer = document.querySelector('.boxContainer')


    let _board = [];
    for(let i = 0; i < 9; i++) {
        _board.push('')
        console.log(_board)
    }

    _board.forEach((item, index) => {
        const cell = document.createElement('div')
        cell.classList.add('box');
        cell.setAttribute('datakey', `${index}`);
        boardContainer.appendChild(cell)
    })


    const resetBoard = () => {
        
        for (let i = 0; i < _board.length; i++) {
            _board[i] = '';
        }

        let cells = document.querySelectorAll('.box')
        cells.forEach((cell) => {
            cell.textContent = ''
        })

        const winMessageReset = document.querySelector('.winIndicator')
        winMessageReset.textContent = ''

        console.log(_board)
        return _board
    }


    const getBoard = () => {
        return _board
    }




    return{
        getBoard,
        resetBoard,
    }

})()

const game = (()=> {

    const board = gameBoard.getBoard()

    let winCondition = false;

    //Generate players

    const createPlayer = (name, marker) => {
        return {name, marker};
    }

    const player = createPlayer( 'Player 1', 'X')

    const otherPlayer = createPlayer( 'Player 2', 'O')


    //Switch turn between players
    let activePlayer = player;
    const turnMessageContainer = document.querySelector('.turnIndicator')
    turnMessageContainer.textContent = `${activePlayer.name}'s turn`

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === player ? otherPlayer : player;
        turnMessageContainer.textContent = `${activePlayer.name}'s turn`
    };

    const getActivePlayer = () => activePlayer;

    const resetActivePlayer = () => {
        activePlayer = player
        turnMessageContainer.textContent = `${activePlayer.name}'s turn`
    }


    //Get win condition
    const winCheck = () => {
        //Win condition Row
        if (((board[0] === player.marker) && (board[1] === player.marker) && (board[2] === player.marker)) || 
        ((board[3] === player.marker) && (board[4] === player.marker) && (board[5] === player.marker)) || 
        ((board[6] === player.marker) && (board[7] === player.marker) && (board[8] === player.marker))) {
            const winMessageContainer = document.querySelector('.winIndicator')
            winMessageContainer.textContent = `${player.name} wins`
            return winCondition = true
        } else if (((board[0] === otherPlayer.marker) && (board[1] === otherPlayer.marker) && (board[2] === otherPlayer.marker)) || 
        ((board[3] === otherPlayer.marker) && (board[4] === otherPlayer.marker) && (board[5] === otherPlayer.marker)) || 
        ((board[6] === otherPlayer.marker) && (board[7] === otherPlayer.marker) && (board[8] === otherPlayer.marker))) {
            const winMessageContainer = document.querySelector('.winIndicator')
            winMessageContainer.textContent = `${otherPlayer.name} wins`
            return winCondition = true;
        }

        //Win condition Column
        if (((board[0] === player.marker) && (board[3] === player.marker) && (board[6] === player.marker)) || 
        ((board[1] === player.marker) && (board[4] === player.marker) && (board[7] === player.marker)) || 
        ((board[2] === player.marker) && (board[5] === player.marker) && (board[8] === player.marker))) {
            const winMessageContainer = document.querySelector('.winIndicator')
            winMessageContainer.textContent = `${player.name} wins`
            return winCondition = true
        } else if (((board[0] === otherPlayer.marker) && (board[3] === otherPlayer.marker) && (board[6] === otherPlayer.marker)) || 
        ((board[1] === otherPlayer.marker) && (board[4] === otherPlayer.marker) && (board[7] === otherPlayer.marker)) || 
        ((board[2] === otherPlayer.marker) && (board[5] === otherPlayer.marker) && (board[8] === otherPlayer.marker))) {
            const winMessageContainer = document.querySelector('.winIndicator')
            winMessageContainer.textContent = `${otherPlayer.name} wins`
            return winCondition = true;
        }

        //Win condition Diagonal
        if (((board[0] === player.marker) && (board[4] === player.marker) && (board[8] === player.marker)) || 
        ((board[2] === player.marker) && (board[4] === player.marker) && (board[6] === player.marker))) {
            const winMessageContainer = document.querySelector('.winIndicator')
            winMessageContainer.textContent = `${player.name} wins`
            return winCondition = true
        } else if (((board[0] === otherPlayer.marker) && (board[4] === otherPlayer.marker) && (board[8] === otherPlayer.marker)) || 
        ((board[2] === otherPlayer.marker) && (board[4] === otherPlayer.marker) && (board[6] === otherPlayer.marker))) {
            const winMessageContainer = document.querySelector('.winIndicator')
            winMessageContainer.textContent = `${otherPlayer.name} wins`
            return winCondition = true;
        }
    }


    //Mark box with active player's mark if box empty
    
    const boxes = document.querySelectorAll('.box')
        boxes.forEach(function(box, index) {
            box.addEventListener('click', function(){
            if ((box.textContent == '') && (winCondition == false)) {
            getActivePlayer();
            box.textContent = activePlayer.marker
            board[index] = activePlayer.marker
            winCheck();
            switchPlayerTurn();
            console.log(board)
            }
        })
    });

    //Reset board 
    const resetBtn = document.querySelector('.resetBtn')
    resetBtn.addEventListener('click', function() {
        gameBoard.getBoard()
        gameBoard.resetBoard();
        resetActivePlayer()
        winCondition = false
    })
    
})()

   

    

