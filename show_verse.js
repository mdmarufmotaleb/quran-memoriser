import { generate } from './generate.js';
import { show_words } from './format_verse.js';
import { chapter_number, page_number, hizb_number } from './filters/filter.js';

let verse = '';
let current_number_of_words = 3;
let selected_filtered_verses, verse_index;
var end_of_selection = false;
var beginning_of_selection = false;

async function show_verse() {
    current_number_of_words = 3; 
    [selected_filtered_verses, verse_index] = generate();
    verse = selected_filtered_verses[verse_index];

    var trimmed_verse = show_words(verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
    show_verse_info();
}

async function show_next_verse() {
    current_number_of_words = 3;

    if (index_exists(selected_filtered_verses, verse_index + 1)) {

        verse_index++;
        verse = selected_filtered_verses[verse_index];

        var trimmed_verse = show_words(verse, current_number_of_words);
        beginning_of_selection = false;
        end_of_selection = false;
        
        document.getElementById('show_verse').textContent = trimmed_verse;

    } else {
        if(!end_of_selection){
            verse_index++;
        }
        end_of_selection = true;
        document.getElementById('show_verse').textContent = "End of Selection";
    }
}

async function show_previous_verse() {
    current_number_of_words = 3;
    
    if (index_exists(selected_filtered_verses, verse_index - 1)) {
        verse_index--;
        verse = selected_filtered_verses[verse_index];

        var trimmed_verse = show_words(verse, current_number_of_words);
        beginning_of_selection = false;
        end_of_selection = false;
        
        document.getElementById('show_verse').textContent = trimmed_verse;
    } else {
        if(!beginning_of_selection){
            verse_index--;
        }
        beginning_of_selection = true;
        document.getElementById('show_verse').textContent = "Beginning of Selection";
    }
}


function index_exists(array, index) {
    return index >= 0 && index < array.length;
}

function is_end_of_verse(shown_verse, whole_verse) {
    return shown_verse === whole_verse;
}

function next_word() { 
    var trimmed_verse = show_words(verse, current_number_of_words);
    
    if (!is_end_of_verse(trimmed_verse, verse)) {
        current_number_of_words++;
    }
    trimmed_verse = show_words(verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

function previous_word() {
    if (current_number_of_words != 0) {
        current_number_of_words--;
    }
    
    var trimmed_verse = show_words(verse, current_number_of_words);
    document.getElementById('show_verse').textContent = trimmed_verse;
}

function show_whole_verse() {
    var trimmed_verse = show_words(verse, current_number_of_words);
    while (!is_end_of_verse(trimmed_verse, verse)) {
        current_number_of_words++;
        trimmed_verse = show_words(verse, current_number_of_words);
    };

    document.getElementById('show_verse').textContent = trimmed_verse;
}

function show_verse_info() {
    document.getElementById('chapter').textContent = chapter_number();
    document.getElementById('page').textContent = page_number();
    document.getElementById('hizb').textContent = hizb_number();
}

window.show_verse = show_verse;
window.next_word = next_word;
window.previous_word = previous_word;
window.show_whole_verse = show_whole_verse;
window.show_next_verse = show_next_verse;
window.show_previous_verse = show_previous_verse;
