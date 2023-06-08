"use strict";

function countWords(ignoreCapitalization, maxWordCount) {
    // Get text from textarea
    let input = document.getElementById("input").value;

    // If true converts text to lower case only
    if (ignoreCapitalization) input = input.toLowerCase();

    // Removes characters before the first word and after the last to prevent a bug. Turns string into seperate objects
    input = input.replace(/^\W+|\W+$/g, "");
    const words = input.split(/\W+/);

    // Counts and displays the total number of words and returns when there are none
    const totalWords = words.length - 1;
    if (!totalWords) return;
    document.getElementById("totalWords").innerHTML = `Total words: ${totalWords}`;

    // Counts frequency of each word
    const wordFrequency = {};
    for (const i of words)
        i in wordFrequency ? wordFrequency[i]++ : wordFrequency[i] = 1;

    // Sorts words by frequency and shortens list to a maxWordCount
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
    const frequentWords = sortedWords.slice(0, maxWordCount);

    // Clears old output
    const output =  document.getElementById("output");
    output.innerHTML = "";

    // Adds the elements to the output
    for (const [word, frequency] of frequentWords)
        output.innerHTML += `<li>${word} (${frequency})</li>`;
}