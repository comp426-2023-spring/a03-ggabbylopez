#!/usr/bin/env node

import minimist from "minimist";
import { RPS,helpRPS,rulesRPS } from "../lib/rpsls";

const args = minimist(process.argv.slice(2), {
    alias: {
        r: "rules"
    }
});

if (args.h || args.help){
    helpRPS();
    process.exit()
} else if (args.r || args.rules){
    rulesRPS();
    process.exit();
} else {
    var playerMove = args._[0];

    if(!playerMove){
        var result = {"player":"rock"};
        console.log(JSON.stringify(result));
        process.exit();
    }

    playerMove = playerMove.toLowerCase();

    var result = RPS(playerMove);

    if(!(typeof result == "undefined")){
        console.log(JSON.stringify(result));
        process.exit();
    }
    process.exit();
}
