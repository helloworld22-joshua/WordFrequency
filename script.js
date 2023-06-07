const text = `Hello World Hello World World`;

// Step 1: Convert the text to lowercase
const lowercaseText = text.toLowerCase();

// Step 2: Split the text into an array of words
const words = lowercaseText.split(/\W+/);

// Step 3: Create an object to store the frequency count of each word
const wordFrequency = {};

// Step 4: Count the frequency of each word
for (const word of words) {
  if (word in wordFrequency) {
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1;
  }
}

// Step 5: Sort the words by frequency in descending order
const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);

// Step 6: Display the 30 most frequently used words and their frequencies
const top30Words = sortedWords.slice(0, 30);
for (const [word, frequency] of top30Words) {
  console.log(`${word}: ${frequency}`);
}