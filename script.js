"use strict";

function countWords(ignoreCapitalization, maxWordCount) {
    // Declaring variables
    let input = document.getElementById("input").value;
    const output =  document.getElementById("output");
    const wordFrequency = {};

    if (ignoreCapitalization) input = input.toLowerCase();  // If true converts string to only lower case
    
    // Removes characters before the first word and after the last to prevent a bug. Turns string into seperate objects
    input = input.replace(/^\W+|\W+$/g, '');
    const words = input.split(/\W+/);

    // Counts frequency of each word
    for (const i of words)
        i in wordFrequency ? wordFrequency[i]++ : wordFrequency[i] = 1;

    // Sorts words by frequency and shortens list to a maxWordCount
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
    const frequentWords = sortedWords.slice(0, maxWordCount);

    // Clears old output and displays total amount of words
    output.innerHTML = "";
    document.getElementById("totalWords").innerHTML = `Total words: ${words.length - 1}`;

    // Adds the elements to the output
    for (const [word, frequency] of frequentWords)
        output.innerHTML += `<li>${word} (${frequency})</li>`;
}