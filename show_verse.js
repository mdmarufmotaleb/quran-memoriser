import { generate } from './generate.js';
import { format_verse, show_words } from './format_verse.js';

let current_verse = '';
let current_number_of_words = 3;

async function show_verse() {
    current_number_of_words = 3; 
    var [selected_filtered_verses, verse_index] = generate();
    var verse = selected_filtered_verses[verse_index];
    current_verse = verse;

    var [trimmed_verse] = format_verse(verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

function index_exists(array, index) {
    return index >= 0 && index < array.length;
}

function is_end_of_verse(shown_verse, whole_verse) {
    return shown_verse === whole_verse;
}

function next_word() { 
    var trimmed_verse = show_words(current_verse, current_number_of_words);
    
    if (!is_end_of_verse(trimmed_verse, current_verse)) {
        current_number_of_words++;
    }
    trimmed_verse = show_words(current_verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

function previous_word() {
    if (current_number_of_words != 0) {
        current_number_of_words--;
    }
    
    var trimmed_verse = show_words(current_verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

function show_whole_verse() {
    var trimmed_verse = show_words(current_verse, current_number_of_words);
    while (!is_end_of_verse(trimmed_verse, current_verse)) {
        current_number_of_words++;
        trimmed_verse = show_words(current_verse, current_number_of_words);
    };

    document.getElementById('show_verse').textContent = trimmed_verse;
}

window.show_verse = show_verse;
window.next_word = next_word;
window.previous_word = previous_word;
window.show_whole_verse = show_whole_verse;
