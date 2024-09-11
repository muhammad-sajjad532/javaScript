let age = 23;
 age = age + 2;
 console.log(age);

 let urdu = 80;
 let math = 100;
 let english = 90;

 let avg = (urdu+math+english)/3;
 console.log(avg);

 let age1 = 34;
 age1 += 1;

 console.log(age1);


 let name1 = "Muhammad Sajjad";
 console.log(name1.length);

 let name3 = "sajjad";
 console.log(name3[5]);

 let a = 12;
 let b = 23;

 console.log(`your amount is ${a+b} rupees`);

  for (let i = 1; i<=15; i=i+2){
   console.log(i)
  }

  for (let k = 2; k<=10; k = k+2){
    console.log(k);
  }

  for (let j=5; j<=50; j=j+5){
    console.log(j);
  }

  //let n = prompt("Enter number");
  //n = parseInt(n);

  //for (let g = n; g<=n*10; g = g+n){
   // console.log(g);
  //}

  let FavMovie = "Avatar";
  let Guess = prompt("Guess Movie Name");

  if (Guess != FavMovie){
    console.log("Try again");
  }

  else {
    console.log("you guess right");
  }