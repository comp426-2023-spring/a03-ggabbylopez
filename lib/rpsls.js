const rpsOptions = ["rock", "paper", "scissors"]

export function playRPS(playerMove){
    if(!rpsOptions.includes(playerMove)){
        console.error(`${playerMove} is not part of the game.`);

        rulesRPS();
        helpRPS();

        return;
    }

    const randIndex = Math.floor(Math.random() * rpsOptions.length);
    const computerMove = rpsOptions[randIndex]

    if (playerMove == computerMove){
        return{
            "player": playerMove,
            "opponent": computerMove,
            "result": tie
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
const rpslsOptions = [["rock", "paper", "scissors", "lizard", "spock"]]

export function playRPSLS(playerMove){
    if(!rpslsOptions.includes(playerMove)){
        console.error(`${playerMove} is not an option in this game`);

        rulesRPSLS();
        helpRPSLS();
    }
}