const roulette = require("./roulette.js");

const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Ready to play build roullete?');
rl.prompt();

rl.on('line', function(line) {
  let didYouWin = roulette.play();   

  if(didYouWin) {
      console.log("Green means go!");
    } else {
      console.log("Oh bummer, build again soon!");
    }

  rl.setPrompt("Play again?");
  rl.prompt();
});
