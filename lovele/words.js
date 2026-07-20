// The list of possible winning words
const targetWords = [
    "ADORE",
    "HEART",
    "CUTIE",
    "SWEET",
    "SMILE",
    // Add your personal 5-letter words here!
];

// A larger list of valid 5-letter words she can guess
// (Usually, Wordle has a huge list of valid dictionary words so the game doesn't reject real words like "APPLE", even if it's not the winning word).
const validGuesses = [
    "APPLE", "TRAIN", "HOUSE", "WATER", "PLANT", 
    // ... we can drop in a standard 5-letter dictionary list here later
    ...targetWords 
];
