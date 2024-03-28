// Task 1
let myName = "John";

console.log(`Hello ${myName}`);

// Task 2
let myName1 = "Phil";

let color = "Red";
let film = "The Terminator";

console.log(`Hi my name is ${myName1}, my favorite color is ${color}, and my favorite film is ${film}`);

// Task 3
let breakfast = "nothing";
let lunch = "Roast Dinner";
let dinner = "Ham rolls";

console.log(`Yesterday, I had ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// Updating values for today
breakfast = "Cereal";
lunch = "Sandwich";
dinner = "Pasta";

console.log(`Today, I'm having ${breakfast} for breakfast, ${lunch} for lunch, and ${dinner} for dinner.`);

// Task 4
// Length()
let str = "Hello, World!";
console.log(str.length); // Output: 13

// Slice()
let str1 = "Hello, World!";
console.log(str1.slice(0, 5)); // Output: Hello
console.log(str1.slice(7));    // Output: World!

// toUpperCase()
let str2 = "hello";
console.log(str2.toUpperCase()); // Output: HELLO

// trim()
let str3 = "   Hello, World!   ";
console.log(str3.trim()); // Output: Hello, World!

// split()
let str4 = "apple,banana,grape";
console.log(str4.split(",")); // Output: ["apple", "banana", "grape"]

// replaceAll()
let str5 = "Hello, World!";
console.log(str5.replaceAll("Hello", "Hi")); // Output: Hi, World!

// replace()
let str6 = "Hello, World!";
console.log(str6.replace("Hello", "Hi")); // Output: Hi, World!

// Task 5
function atm(cardNumber, pin, withdrawalAmount, accountBalance) {
  const correctCardNumber = "1234567890";
  const correctPin = "1234";

  if (cardNumber === correctCardNumber && pin === correctPin) {
    if (withdrawalAmount > 250) {
      console.log("Transaction failed: Maximum withdrawal amount exceeded (Max $250)");
    } else if (withdrawalAmount <= accountBalance) {
      const updatedBalance = accountBalance - withdrawalAmount;
      console.log(`Transaction successful! New balance: $${updatedBalance}`);
    } else {
      console.log("Transaction failed: Insufficient funds");
    }
  } else {
    alert("Card Rejected");
  }
}

atm("1234567890", "1234", 200, 500);
atm("1234567890", "1234", 300, 500);
atm("1234567890", "1234", 200, 150);
atm("1234567890", "12345", 200, 150);

// Task 6
// Array of favorite films/TV shows
let favoriteMedia = ["The Terminator", "Star Trek: Discovery", "The Dark Knight", "The Walking Dead", "Dr. Who"];

// Using push() method to add 2 more items to the array
favoriteMedia.push("Star Trek: First Contact", "Stranger Things");

// Looping through the array and logging each item to the console
for (let i = 0; i < favoriteMedia.length; i++) {
  console.log(favoriteMedia[i]);
}

// Task 7
function guessNumber() {
  let attempts = 0;

  while (true) {
    const guess = parseInt(prompt("Guess a number between 1 and 10:"));
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts++;

    if (randomNumber === guess) {
      alert(`Congratulations! Guess number found after ${attempts} attempts.`);
      break;
    }
  }
}


// Call the function to start the game
guessNumber();

// Task 8
function generatePassword(length) {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

const newPassword = generatePassword(10); // Generates a random password of length 10
console.log(newPassword);
