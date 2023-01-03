const readline = require('readline-sync');

const name = readline.question('What is your name?\n')

console.log(`\n Welcome to Black Friday Shopping at Walmart ${name}! \n
Do you have what it takes to keep your cool during the holiday rush? \n
Take on the challenge to get one of the last PS5s as you encounter disgruntled employees, maniac moms, and a mad man on a scooter.\n
Happy shopping. \n`)

if (readline.keyInYN('Are you ready to begin?')) {
    console.log(' \n Get in there and get that PS5! \n');

} else {
    console.log('Why are you here then? Come back when you are ready. \n')
    readline.keyInYN('Are you ready to begin now? \n')


}



let player = {
    name: `${name}`,
    inventory: [],
    temper: 10,
    moves: ["run away", "attack"]
}


 