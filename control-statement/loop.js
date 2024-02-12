var sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum = sum + i;
  }
}
document.write(sum);
