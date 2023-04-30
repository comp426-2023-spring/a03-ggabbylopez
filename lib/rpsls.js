

const rpsOptions = ["rock", "paper", "scissors"]

export function RPS(playerMove){
    playerMove = playerMove.toLowerCase()
    if(!rpsOptions.includes(playerMove)){
        console.error(`${playerMove} is not part of the game.`);

        rulesRPS();
        helpRPS();

        throw new RangeError();
    }

    const randIndex = Math.floor(Math.random() * rpsOptions.length);
    const computerMove = rpsOptions[randIndex]

    if (playerMove == computerMove){
        return{
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        };
    }
    if((playerMove == "rock" && computerMove == "scissors") ||
    (playerMove == "scissors" && computerMove == "paper") ||
    (playerMove == "paper" && computerMove == "rock")){

        return {
            "player": playerMove,
            "opponent": computerMove,
            "result": "win"
        };
    }else {
        return {
            "player": playerMove,
            "opponent": computerMove,
            "result": "lose"
        };
    }
}

export function helpRPS(){
    const help = `Usage: node-rps [SHOT]
    Play Rock Paper Scissors (RPS)
    
      -h, --help      display this help message and exit
      -r, --rules     display the rules and exit
    
    Examples:
      node-rps        Return JSON with single player RPS result.
                      e.g. {"player":"rock"}
      node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                      e.g {"player":"rock","opponent":"scissors","result":"win"}`;
        console.log(help);
        return;
    }


export function rulesRPS(){
    const rules = `Rules for Rock Paper Scissors:

    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock CRUSHES Scissors`;
    console.log(rules)
    return;
}
const rpslsOptions = ["rock", "paper", "scissors", "lizard", "spock"]

export function playRPSLS(playerMove){
    playerMove = playerMove.toLowerCase()
    if(!rpslsOptions.includes(playerMove)){
        console.error(`${playerMove} is not an option in this game`);

        rulesRPSLS();
        helpRPSLS();

        return;
    }
    const randIndex = Math.floor(Math.random() * rpslsOptions.length);
    const computerMove = rpslsOptions[randIndex];

    if (playerMove == computerMove){
        return{
            "player": playerMove,
            "opponent": computerMove,
            "result": "tie"
        };
    }

    if ((playerMove == "rock" && (computerMove == "scissors" || computerMove == "lizard")) ||
    (playerMove == "scissors" && (computerMove == "paper" || computerMove == "lizard")) ||
    (playerMove == "paper" && (computerMove == "rock" || computerMove == "spock")) ||
    (playerMove == "lizard" && (computerMove == "paper" || computerMove == "spock")) ||
    (playerMove == "spock" && (computerMove == "rock" || computerMove == "scissors"))){
        return {
            "player": playerMove,
            "opponent": computerMove,
            "result": "win"  
        };
    } else {
        return {"player": playerMove,
            "opponent": computerMove,
            "result": "lose"
        };
    }
}

    export function helpRPSLS(){
        const help = `Usage: node-rpsls [SHOT]
        Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!
        
          -h, --help        display this help message and exit
          -r, --rules       display the rules and exit
        
        Examples:
          node-rpsls        Return JSON with single player RPSLS result.
                            e.g. {"player":"rock"}
          node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.
                            e.g {"player":"rock","opponent":"Spock","result":"lose"}`;
        console.log(help);
        return;
    }

    export function rulesRPSLS(){
        const rules = `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:
    - Scissors CUTS Paper
    - Paper COVERS Rock
    - Rock SMOOSHES Lizard
    - Lizard POISONS Spock
    - Spock SMASHES Scissors
    - Scissors DECAPITATES Lizard
    - Lizard EATS Paper
    - Paper DISPROVES Spock
    - Spock VAPORIZES Rock
    - Rock CRUSHES Scissors`;
    console.log(rules);
    return;
    }