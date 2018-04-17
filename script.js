var userChoice, computerChoice;


$(".rock").click(function(){
  userChoice = "Rock";
  cc();
  compare();
  $(".show").text("Computer Choice: " + computerChoice);
});

$(".paper").click(function(){
  userChoice = "Paper";
  cc();
  compare();
  $(".show").text("Computer Choice: " + computerChoice);
});

$(".scissors").click(function(){
  userChoice = "Scissor";
  cc();
  compare();
  $(".show").text("Computer Choice: " + computerChoice);
});

function compare(){
  var result;
  
  if(userChoice === computerChoice){
    result = "Its a Tie!!";
  }else if(userChoice === "Rock" && computerChoice === "Scissor"){
    result = "User Wins";
  }else if(userChoice === "Rock" && computerChoice === "Paper"){
     result = "CPU Wins!!";
  } else if(userChoice === "Paper" && computerChoice === "Rock"){
     result = "User Wins!!";
  } else if(userChoice === "Paper" && computerChoice === "Scissors"){
     result = "CPU Wins!!";
  } else if(userChoice === "Scissors" && computerChoice === "Paper" ){
     result = "User Wins!!";
  } else if(userChoice === "Scissors" && computerChoice === "Rock"){
     result = "CPU Wins!!";
  }
  
 $(".outcomer").html(result);
}

function cc(){
  computerChoice = Math.random();
    
  if (computerChoice < 0.34) {
    computerChoice = "Rock";
  } 
  else if(computerChoice <= 0.67) {
    computerChoice = "Paper";
  } else { 
    computerChoice = "Scissors";
  }

  console.log(computerChoice);
}