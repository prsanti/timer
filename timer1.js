// take arguments from the command line
// then removes first 2 elements from the terminal
// then sorts array by ascending order
const args = process.argv.splice(2).sort((a, b) => a - b);
// filters the array that are NaN or negative
const filteredArgs = args.filter(num => {
  if (!Number.isNaN(Number(num)) && Number(num) > 0) {
    return Number(num);
  }
});

const playBeep = (filteredArgs) => {
  for (const num of filteredArgs) {
    let timer = Number(num) * 1000;

    // Can't use const systemSound = process.stdout.write('\x07);
    // Treats it as 1 instance.
    // Need to use the full code when calling it
    setTimeout(() => process.stdout.write('\x07'), timer);
  }

};

playBeep(filteredArgs);