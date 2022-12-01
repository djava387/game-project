## Role each of the functions play in the overall game

The overall game works by detecting a click event, and running the playGame() function. The values playerSelection and computerSelection are then rendered in the innerHTML of the message variable. The checkWinner() function is then run with the values of playerSelection and computerSlection, which returns a result. The result is then rendered in the innerHTML of the message variable.

If the result is "You" then the confetti() function is run. The result string is then rendered in the innerHTML of the message variable. The value of the winner array is then incremented.

If the result is "Mr. Robot" then the result string is rendered in the innerHTML of the message variable. The value of the winner array is then incremented.

If the result is "Draw" then the result string is rendered in the innerHTML of the message variable.

The score.innerHTML is then rendered with the results of the winner array.

The reset.addEventListener() method is then run when the reset button is clicked.
