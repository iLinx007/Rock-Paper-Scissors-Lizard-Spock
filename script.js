let score = localStorage.getItem('score');

            if (!score || typeof score !== 'object'){
                 score = {
                    wins: 0,
                    ties: 0,
                    losses: 0
                };
            }

            alert("Welcome to my simple Rock-Paper-Scissors Game\nHave fun");

            updateScoreElement();

            function updateScoreElement(){
                document.querySelector('.js-score').innerHTML = 
                `Wins: ${score.wins}, Ties: ${score.ties}, Losses ${score.losses}`;
            }

            function generateComputerMove() {
                const randomNumber = Math.random();
                let computerMove = '';
            
                if (randomNumber >= 0 && randomNumber < (1/5)) {
                    computerMove = 'rock'; 
                }
                else if(randomNumber >= (1/5) && randomNumber < (2/5)) {
                    computerMove = 'paper';
                }
                else if(randomNumber >= (2/5) && randomNumber < (3/5)) {
                    computerMove = 'scissors';
                }
                else if(randomNumber >= (3/5) && randomNumber < (4/5)) {
                    computerMove = 'lizard';
                }
                else if(randomNumber >= (4/5) && randomNumber < 1) {
                    computerMove = 'spock';
                }
                return computerMove;
            }
            

            function playGame(playerMove){
                const computerMove = generateComputerMove();
            
                let result = '';
                if (playerMove === 'rock') {
                    if (computerMove === 'rock') {
                        result = 'Tie';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'You win';
                    }
                    else if (computerMove === 'lizard') {
                        result = 'You win';
                    }
                    else if (computerMove === 'spock') {
                        result = 'You lose';
                    }
                }
                else if (playerMove === 'paper') {
                    if (computerMove === 'rock') {
                        result = 'You win';
                    }
                    else if (computerMove === 'paper') {
                        result = 'Tie';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'lizard') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'spock') {
                        result = 'You win';
                    }
                }
                else if (playerMove === 'scissors') {
                    if (computerMove === 'rock') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You win';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'Tie';
                    }
                    else if (computerMove === 'lizard') {
                        result = 'You win';
                    }
                    else if (computerMove === 'spock') {
                        result = 'You lose';
                    }
                }
                else if (playerMove === 'lizard') {
                    if (computerMove === 'rock') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You win';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'lizard') {
                        result = 'Tie';
                    }
                    else if (computerMove === 'spock') {
                        result = 'You win';
                    }
                }
                else if (playerMove === 'spock') {
                    if (computerMove === 'rock') {
                        result = 'You win';
                    }
                    else if (computerMove === 'paper') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'scissors') {
                        result = 'You win';
                    }
                    else if (computerMove === 'lizard') {
                        result = 'You lose';
                    }
                    else if (computerMove === 'spock') {
                        result = 'Tie';
                    }
                }
                

                if (result === 'You win'){
                    score.wins += 1;
                }
                else if (result === 'Tie'){
                    score.ties += 1;
                }
                else if (result === 'You lose'){
                    score.losses += 1;
                }

                localStorage.setItem('score', JSON.stringify(score));

                updateScoreElement();

                document.querySelector('.js-result').innerHTML = `${result}`;

                document.querySelector('.js-moves').innerHTML 
                = `You
                    <img src="images/${playerMove}-emoji.png" class="move_icon">
                    <img src="images/${computerMove}-emoji.png" class="move_icon">
                    Computer`;
            }
