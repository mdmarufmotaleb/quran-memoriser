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

function format_verse(verse, number_of_words) {
    const trimmed_verse = show_words(verse, number_of_words);
    return [trimmed_verse];
}

export { show_words, format_verse };
