const scores = [99, 75, 158, 95, 55, 76];

function highestScore(arr) {
  const sortedArray = arr.sort((a, b) => {
    return b - a;
  });

  console.log(sortedArray[0]);
}

highestScore(scores);
