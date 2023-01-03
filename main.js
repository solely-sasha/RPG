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


let enemies = ["disgruntled employee", "mad man on a scooter", "maniac mom"];
let randomEnemy = Math.floor(Math.random() * enemies.length)
let items = ["$20", "walmart gift card", "customer of the year award"];
let newItem = Math.floor(Math.random() * items.length)
let newGame = () => {
    player.temper = 10;

}





function play(){
    let walking = Math.floor(Math.random() * 4)
    let chanceOfAttack = Math.floor(Math.random() * 4)
    let enemyHealth = Math.floor(Math.random() * 10);
    let enemyPower = Math.floor(Math.random() * 5);
    let playerPower = Math.floor(Math.random() * 5);
 
    const options = readline.keyIn(" do you want to (w)alk or (p)rint player info? \n")
   
    if (options === 'p') {
        console.log(`\n Name: ${player.name}, temper lever: ${player.temper}, Inventory: ${player.inventory} \n`)
        play()
       
    } if (options === 'w') {
              console.log("chance of attack:", walking)
              if (walking < 2){
                console.log(" \n you're getting there, keep moving \n")
              

              }
    }if (walking >= 2) {
        console.log(` \n ${enemies[randomEnemy]} blocks the isle \n`)
    
        while(enemyHealth > 0 && player.temper > 0){
            let choices = player.moves;
            let choice = readline.keyInSelect(choices, ' \n what is your move? \n');
    
        
                  
           if(choice=== 0){
    
                console.log("you run away");
                           if(chanceOfAttack >= 2){ 
                            console.log(`${enemies[randomEnemy]} caught you and attacks`)
                    console.log('enemy health:', enemyHealth)
                    console.log("This has turned into a battle and you're starting to lose your temper, but you won't go down without a fight");
                    
            } else
           console.log("you escaped! Keep moving");
      
        }
       if(choice === 1) 
       console.log(`you hit with ${playerPower} power`)
        console.log(` ${enemies[randomEnemy]} hits you with ${enemyPower} power`)
                   
                    player.temper -= enemyPower;
                    enemyHealth -= playerPower;
                    console.log(`player temper: ${player.temper}`)
                    console.log(`enemy health: ${enemyHealth}`);

                    if(enemyHealth <= 0){

                        console.log("you won this battle");
                        player.inventory.push(items[newItem])
                        console.log(`you get: ${items[newItem]}`)
                     
                        
                    }else if(player.temper <= 0){
                        console.log("lost your temper, game over");
                        player.inventory = []
                        
                    
                    }

        }


    }

}



while(player.temper > 0){
    newGame();
    play();
   }
