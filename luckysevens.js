function luckySevens() 
{
  var bet = document.getElementById("bet").value;
  var tally = 0;
  var counter = 0;
  var gameMoney = bet;
  var bArray = [bet];
  var maxMoney = 0;

  if (bet <= 0) 
  { 
    alert("Youre bet must be bigger than 0");
    document.forms["game"]["bet"].parentElement.className = "form-group has-error"
    return false;
  }

  while (gameMoney > 0) { //while statement will run until money is gone
    tally++;

    var dice1 = Math.floor(Math.random() * 6) + 1; // first dice roll 
    var dice2 = Math.floor(Math.random() * 6) + 1; // second dice roll
    var diceTotal = dice1 + dice2;

    // winning scenario 
    if (diceTotal == 7) 
	{
      gameMoney = gameMoney + 4;
      var lastHand = bArray[bArray.length - 1];
      var newHand = lastHand + 4;
      bArray.push(newHand);
    }
    // losing scenario 
    else {
      gameMoney--;
      counter++;
      var lastHand = bArray[bArray.length - 1];
      var newHand = lastHand - 1;
      bArray.push(newHand);
    }
    
  }


  total = Math.max(...bArray);
  rolls = bArray.indexOf(total) + 1;
  if (rolls < 1) {
    rolls = 0;
  }
  
  
  
// display reults 
  document.getElementById("results").style.display = "block";
  document.getElementById("start").innerText = bet;
  document.getElementById("totalRolls").innerText = tally;
  document.getElementById("highest").innerText = total;
  document.getElementById("numRolls").innerText = rolls;
  return false;
}