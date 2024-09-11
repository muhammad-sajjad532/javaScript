const max = prompt("Enter your number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");

while(true){
    if (guess == "quit"){
        console.log("user quit");
        break;
    }

    if (guess == random){
        console.log("congarts your guess is right the number was", random);
        break;
    }

    else if (guess < random){
       guess = prompt("hint: you enter num too small.");
    }

    else {
       guess = prompt("hint: you enter number too large.")
    }
}