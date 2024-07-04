import { generate } from './generate.js';
import { format_verse, show_words } from './format_verse.js';

let current_verse = '';
let current_number_of_words = 3;

async function show_verse() {
    current_number_of_words = 3; 
    const [verse] = generate();
    current_verse = verse;

    const [trimmed_this_verse, trimmed_next_verse] = format_verse(verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_this_verse;
}

function next_word() {
    current_number_of_words++;
    const trimmed_verse = show_words(current_verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

function show_whole_verse() {
    current_number_of_words = 250;
    const trimmed_verse = show_words(current_verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

window.show_verse = show_verse;
window.next_word = next_word;
window.show_whole_verse = show_whole_verse;
