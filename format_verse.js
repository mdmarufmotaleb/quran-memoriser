function is_end_of_verse(shown_verse, whole_verse) {
    return shown_verse === whole_verse;
}

function show_words(verse, number_of_words) {
    const split_verses = verse.split(' ');
    let shown_verse = (split_verses.slice(0, number_of_words)).join(' ');

    if (!is_end_of_verse(shown_verse, verse)) {
        shown_verse = "... " + shown_verse;
    }
    return shown_verse;
}

function format_verse(this_verse, next_verse, number_of_words) {
    const trimmed_this_verse = show_words(this_verse, number_of_words);
    const trimmed_next_verse = show_words(next_verse, number_of_words);
    return [trimmed_this_verse, trimmed_next_verse];
}

export { show_words, format_verse };
