"use strict";

function countWords(ignoreCapitalization, maxWordCount) {
    let text = document.getElementById("input").value;
    const output =  document.getElementById("output");

    output.innerHTML = "";

    if (ignoreCapitalization) text = text.toLowerCase();

    const words = text.split(/\W+/);
    const wordFrequency = {};

    for (const i of words) {
        (i in wordFrequency) ? wordFrequency[i]++ : wordFrequency[i] = 1;
    }

    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
    const topWords = sortedWords.slice(0, maxWordCount);

    for (const [word, frequency] of topWords) {
        output.innerHTML += `<li>${word} (${frequency})</li>`;
    }
}