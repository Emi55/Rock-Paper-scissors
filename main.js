const argv  = require('yargs').argv

module.exports = function(){
    //console.log('you passed:',argv._[0])

    if(argv._[0]){
     
    let userSelection;

    switch(argv._[0]){
        case 'rock':
            userSelection = 0;
            break;   
         case 'Rock':
            userSelection = 0;
            break;

        case 'paper':
            userSelection = 1;
            break;
        case 'Paper':
            userSelection = 1;
            break;
            
         case 'scissors':
            userSelection = 2;
            break; 
         case 'Scissors':
            userSelection = 2;
             break;
             default: 
         console.log("Invalid choice. Please select rock, paper or scissors");   
             
         console.log('userSelection:',userSelection);
         console.log('computerSelection:',userSelection);
    }

        // 0 = rock , 1 = paper , and 2 = scissors
        let computerSelection = Math.floor(Math.random() == 3);

        if(userSelection == computerSelection){

         console.log("It's a tie!");

        }

        else if(userSelection > computerSelection) {
          
            console.log("Users wins!");
        }


        else if(userSelection > computerSelection && userSelection == 2 && computerSelection == 0) {
          
            console.log("Computer wins!");
        }

        else{
            console.log("Computer wins!");
        }

    }

    else{
        console.log("You did not inlcude rock, paper or scissors");
        
    }
    
}();


