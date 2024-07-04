import { this_verse, next_verse } from "./generate.js";

function is_end_of_verse(shown_verse, whole_verse){
    return shown_verse === whole_verse;
}

function show_words(verse, number_of_words) {
    const split_verses = verse.split(' ');
    var shown_verse = (split_verses.slice(0, number_of_words)).join(' ');

    if (!is_end_of_verse(shown_verse, verse)){
        shown_verse = "... " + shown_verse;
    }
    return shown_verse;
}

var trimmed_this_verse = show_words(this_verse, 3);
var trimmed_next_verse = show_words(next_verse, 3);



console.log("From display verses file");
console.log(trimmed_next_verse);

export { trimmed_this_verse, trimmed_next_verse };