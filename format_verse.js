function is_end_of_verse(shown_verse, whole_verse) {
    return shown_verse === whole_verse;
}

function show_words(verse, number_of_words) {
    var split_verses = verse.split(' ');
    let shown_verse = (split_verses.slice(0, number_of_words)).join(' ');

    if (!is_end_of_verse(shown_verse, verse)) {
        shown_verse = "... " + shown_verse;
    }
    return shown_verse;
}


export { show_words };
