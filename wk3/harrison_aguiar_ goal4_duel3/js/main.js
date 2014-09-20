/*
  Harrison Aguiar
  Date: 9/19/14
 Assignment: Goal3: Assignment: Duel3
 Part 3/3 of series

 Programming for Web Applications I - Online
 Professor: FIALISHIA OLOUGHLIN
*/

// self-executing function
(function(){

    //CONSOLE LOG START OF 
    console.log(" ** FIGHT!!! **");                //Print "Fight!!!" to console so we know program started
    //console.log("Hulk & Captain America");  //Print text to console (Fighter Names)

    var fighter1_txt = document.querySelector("#hulk").querySelector("p");  //DOM variable for first fighter
	var fighter2_txt = document.querySelector("#ca").querySelector("p");    //DOM variable for second fighter
    var round_txt = document.querySelector("h5");                           //Pull in text indicating the round number
    var button = document.querySelector("#fight_btn");                      //Pull in button to start the game

    console.log()

    //SETUP click event
    button.addEventListener("click", fight, false);                 //add click event

    var fighters = [                //array of objects for 2 fighters
        {
            name:"Hulk",            //index0.name with object-key name = Hulk
            damage:20,              //index0.damage
            health:100              //index0.health
        },
        {
            name:"Captain America",     //index1.name with object-key name = Captain America
            damage:20,                  //index1.damage
            health:100                  //index1.health
        }
    ];
    var round = 1;

    //initialize DOM innerHTML text for top of the HTML page
    round_txt.innerHTML = "Click FIGHT BUTTON to Start!!!";     //html displays instruction to start game
    fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;       //html displays fighter 1 info = name and health
    fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;       //html displays fighter 2 info = name and health

    /* OLD JS

    var player1 = ["Hulk", 20, 100];       //define variable that references name, damage and health of fighter #1 in an array
	var player2 = ["Captain America", 20, 100];    //define variable that references name, damage and health of fighter #2 in an array
    
    //initiate round
    var round=0;                            //define variable to keep track what round we are in
    */


    function fight() {                       //FIGHT function

        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;   //display fight info on html for fighter 1
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;   //display fight info on html for fighter 2

        //DAMAGE
        var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);       //random damage for fighter 1 for each round
        var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);       //random damage for fighter 2 for each round

        //INFLICT DAMAGE
        fighters[0].health -= f1;       //total damage after each round for fighter 1
        fighters[1].health -= f2;       //total damage after each round for fighter 2

        console.log(fighters[0].health, fighters[1].health); //console log each round result

        //check for winner
        var result = winnerCheck(); //define variable for winner
        console.log(result);        //console log the result of the fight

        round_txt.innerHTML = "ROUND #" + round + " Results:";
        round++;
        if (result === "no winner") {       //if loop for no winner
            fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;   //display fight info on html for fighter 1
            fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;   //display fight info on html for fighter 2

        } else {        //else = has a winner
            fighter1_txt.innerHTML = result; //display result for fighter 1
            fighter2_txt.innerHTML = "";    //display result for fighter 2

            button.removeEventListener("click", fight, false); //if has a winner, remove "FIGHT" button

            document.querySelector('.buttonblue').innerHTML = 'DONE!!!'; //if has a winner, display "DONE" on the button
        }
    }

/* OLD CODING
        alert(player1[0]+":"+player1[2]+"  *START*  "+player2[0]+":"+player2[2]);   //alert the game is about to start, with player's name and initial health
        for (var i = 0; i < 10; i++)        //if i is < then 10, execute the code that loops through rounds and reduces the player’s health accordingly
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1[1] * .5;        //define variable for the minimum damage for fighter #1 which should be half of the main damage
            var minDamage2 = player2[1] * .5;        //define variable for the minimum damage for fighter #2 which should be half of the main damage
            var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);       //define formula variable for damage that occurs to player #1 at a random amount between half damage and maximum damage
            var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);       //define formula variable for damage that occurs to player #2 at a random amount between half damage and maximum damage

            //inflict damage
            player1[2]-=f1;    //deduct damage after each round to fighter #1's health
            player2[2]-=f2;    //deduct damage after each round to fighter #2's health

            console.log(player1[0]+": "+player1[2] + " " + player2[0]+":"+player2[2]); //Print result of both players with name and ending health after the round fight to the console

            //check for victory
            var result = winnerCheck();     //define variable for the round fight result
            console.log(result);            //Print result of round fight to the console
            if (result==="no winner")       //conditional logic to determine if there is a winner
            {
                round++;                    //if there is "no winner", adds 1 round to the fight
                alert(player1[0]+":"+player1[2]+"  *ROUND "+round+" OVER"+"*  "+player2[0]+":"+player2[2]); //alert box will show the two players' remaining health and the round number.

            } else{                     //conditional logic to determine if there is not a winner
                alert(result); //alert box will show the result as the fight is over
                break;      //break command used to escape out of the loop if the fight is over before the 10 rounds is reached
            }

          }
    }
*/
    function winnerCheck(){                             //function to determine if there is a winner or not.
        var result="no winner";                         //define variable for result in the function winnerCheck()
        if (fighters[0].health < 1 && fighters[1] < 1)     //conditional logic to determine if both fighters' health become to less than 1
        {
            result = "You Both Die";            //print result of both players die
        } else if(fighters[0].health < 1){           //conditional logic to determine if fighter 1's health become < 1
            result = fighters[1].name +" WINS!!!";    //print result of fighter 2 WINS
        } else if (fighters[1].health < 1)           //conditional logic to determine if fighter 2's health become < 1
        {
            result = fighters[0].name +" WINS!!!";   //print result of fighter 1 WINS
        }
       return result;                           //return result to variable result outside the function winnerCheck()
    }


})();