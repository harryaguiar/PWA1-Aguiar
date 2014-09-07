// self-executing function
(function(){

    //CONSOLE LOG START OF 
    console.log("FIGHT!!!");                //Print "Fight!!!" to console so we know program started
    console.log("Hulk & Captain America")   //Print text to console (Fighter Names)

    // DEFINE PLAYERS VARIABLES
    var playerOneName = "Hulk";             //define variable for name of the fighter #1
    var playerTwoName = "Captain America";  //define variable for name of the fighter #2

    //player damage
    var player1Damage = 20;                 //define variable for damage to be deducted from fighter #1
    var player2Damage = 20;                 //define variable for damage to be deducted from fighter #2

    //player health
    var playerOneHealth = 100;              //define variable for beggining health of fighter #1
    var playerTwoHealth = 100;              //define variable for beggining health of fighter #2

    //initiate round
    var round=0;                            //define variable to keep track what round we are in

    function fight(){                       //function that loops through rounds and reduces the player’s health accordingly
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);   //alert the game is about to start, with player's name and health at 100
        for (var i = 0; i < 10; i++)        //if i is < then 10, execute the code that loops through rounds and reduces the player’s health accordingly
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;        //define variable for the minimum damage for fighter #1 which should be half of the main damage
            var minDamage2 = player2Damage * .5;        //define variable for the minimum damage for fighter #2 which should be half of the main damage
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);       //define formula variable for damage that occurs to player #1 at a random amount between half damage and maximum damage
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);       //define formula variable for damage that occurs to player #2 at a random amount between half damage and maximum damage

            //inflict damage
            playerOneHealth-=f1;    //deduct damage after each round to fighter #1's health
            playerTwoHealth-=f2;    //deduct damage after each round to fighter #2's health

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); //Print result of both players with ending health after the round fight to the console 

            //check for victory
            var result = winnerCheck();     //define variable for the round fight result
            console.log(result);            //Print result of round fight to the console
            if (result==="no winner")       //conditional logic to determine if there is a winner
            {
                round++;                    //if there is "no winner", adds 1 round to the fight
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); //alert box will show the two players' remaining health and the round number.

            } else{                     //conditional logic to determine if there is not a winner
                alert(result); //alert box will show the result as the fight is over
                break;      //break command used to escape out of the loop if the fight is over before the 10 rounds is reached
            };

          };
    };

    function winnerCheck(){                             //function to determine if there is a winner or not.
        var result="no winner";                         //define variable for result in the function winnerCheck()
        if (playerOneHealth<1 && playerTwoHealth<1)     //conditional logic to determine if both players' health become to less than 1
        {
            result = "You Both Die";            //print result of both players die
        } else if(playerOneHealth<1){           //conditional logic to determine if player #1's health become < 1
            result =playerTwoName+" WINS!!!"    //print result of player #2 WINS
        } else if (playerTwoHealth<1)           //conditional logic to determine if player #2's health become < 1
        {
            result = playerOneName+" WINS!!!"   //print result of player #1 WINS
        };
       return result;                           //return result to variable result outside the function winnerCheck()
    };

    /*******  The program gets started below *******/
    fight();

})();