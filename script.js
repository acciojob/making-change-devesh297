function makeChange(amount) {
  let change = {};

  change.q = Math.floor(amount / 25); // Number of quarters
  amount %= 25; // Remaining cents after quarters

  change.d = Math.floor(amount / 10); // Number of dimes
  amount %= 10; // Remaining cents after dimes

  change.n = Math.floor(amount / 5); // Number of nickels
  amount %= 5; // Remaining cents after nickels

  change.p = amount; // Remaining pennies

  return change;
}

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
