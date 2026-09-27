// ==========================================
// 1. VARIABLES & DATA TYPES
// ==========================================
// 'let' is for variables that can change; 'const' is for values that stay the same.
const userName = "Alex";          // String (Text)
let userAge = 25;                // Number
const isStudent = true;          // Boolean (true/false)
let userScore = null;            // Null (intentionally empty)
let userHobbies;                 // Undefined (unassigned variable)

// Printing output to the developer console
console.log("--- 1. Variables & Data Types ---");
console.log(`User: ${userName}, Age: ${userAge}`); 


// ==========================================
// 2. BASIC OPERATORS (Math & Comparison)
// ==========================================
console.log("\n--- 2. Operators ---");
let currentYear = 2026;
let birthYear = currentYear - userAge; // Subtraction math
console.log("Born in year:", birthYear);

let doubleAge = userAge * 2;           // Multiplication math
console.log("Double age is:", doubleAge);

// Comparison (returns true or false)
let isAdult = userAge >= 18; 
console.log("Is the user an adult?", isAdult); // true


// ==========================================
// 3. CONDITIONALS (Decision Making)
// ==========================================
console.log("\n--- 3. Conditionals ---");
if (userAge < 13) {
    console.log(`${userName} is a child.`);
} else if (userAge >= 13 && userAge < 20) { // '&&' means AND
    console.log(`${userName} is a teenager.`);
} else {
    console.log(`${userName} is an adult.`); // This block runs
}


// ==========================================
// 4. ARRAYS (Lists of Data)
// ==========================================
console.log("\n--- 4. Arrays ---");
let skills = ["JavaScript", "HTML", "CSS"];

// Accessing items by their position (Index starts at 0)
console.log("First skill:", skills[0]); // JavaScript

// Adding a new item to the list
skills.push("Python");
console.log("Updated skills list:", skills);


// ==========================================
// 5. LOOPS (Repeating Code)
// ==========================================
console.log("\n--- 5. Loops ---");

// A 'for' loop runs a specific number of times
console.log("Counting up to 3 using a for loop:");
for (let i = 1; i <= 3; i++) {
    console.log("Count:", i);
}

// Looping through an array
console.log("Listing all skills using a loop:");
for (let i = 0; i < skills.length; i++) {
    console.log(`- Skill [${i}]: ${skills[i]}`);
}


// ==========================================
// 6. FUNCTIONS (Reusable Blocks of Code)
// ==========================================
console.log("\n--- 6. Functions ---");

// Defining a function with parameters (inputs)
function calculateTax(income, taxRate = 0.15) {
    let taxAmount = income * taxRate;
    return taxAmount; // Returns the calculated value back
}

// Calling (running) the function and saving its result
let myTax = calculateTax(50000); 
console.log("Calculated tax amount:", myTax); // 7500


// ==========================================
// 7. OBJECTS (Key-Value Pairs)
// ==========================================
console.log("\n--- 7. Objects ---");

// Storing complex data structures
let smartPhone = {
    brand: "Apple",
    model: "iPhone 15",
    storageGB: 128,
    isFullyCharged: true,
    // Objects can also contain functions (methods)
    ring: function() {
        console.log("Beep! Beep! Phone is ringing.");
    }
};

// Accessing properties using dot notation
console.log(`Device: ${smartPhone.brand} ${smartPhone.model}`);
smartPhone.ring(); // Executes the phone function
