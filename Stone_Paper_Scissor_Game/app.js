function play(playerChoice) {
    const choices = ["stone", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    document.getElementById("player-choice").textContent = "Your Choice: " + playerChoice;
    document.getElementById("computer-choice").textContent = "Computer's Choice: " + computerChoice;
    
    let result = "";
  
    if(playerChoice === computerChoice){
      result = "It's a Draw!";
    } 
    else if(
      (playerChoice === "stone" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "stone") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ){
      result = "You Win!";
    } 
    else{
      result = "Computer Wins!";
    }
  
    document.getElementById("winner").textContent = "Result: " + result;
  }
  