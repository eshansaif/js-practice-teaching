document.write(`<h3 style="text-align: center">
Please Select a Number a between 1 to 5 and see your fate!!
</h3>;`);

let noOfWon = 0;
let noOfLost = 0;
for (let i = 1; i <= 5; i++) {
  const userInput = parseInt(prompt("Please Enter a number a between 1-5"));
  const randomNumber = Math.round(Math.random() * 5);
  if (userInput === randomNumber) {
    alert(`Congratulations! You Have Won!!`);
    noOfWon++;
  } else {
    alert(`Opps! You have lost - The random number was ${randomNumber}!!`);
    noOfLost++;
  }
}

document.write(
  `<h1 style="text-align: center; color: green";> Total number of Won: ${noOfWon} </h1>`
);
document.write(
  `<h1 style="text-align: center; color: green";> Total number of Lost: ${noOfLost} </h1>`
);
