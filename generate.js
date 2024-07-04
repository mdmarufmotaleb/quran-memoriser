import { this_chapter_verses } from "./filters/chapters_filter.js";
import { this_page_verses } from "./filters/pages_filter.js";

function mesh_filters(this_chapter_verses, this_page_verses) {
    const filters_meshed = [];
    if (this_chapter_verses !== null) {
        filters_meshed.push(this_chapter_verses);
    }
    if (this_page_verses !== null) {
        filters_meshed.push(this_page_verses);
    }
    return filters_meshed;
}

function choose_filter(all_filtered_verses) {
    return Math.floor(Math.random() * all_filtered_verses.length);
}

function generate_random_verse(selected_filtered_verses) {
    const this_verse_index = Math.floor(Math.random() * selected_filtered_verses.length);
    const next_verse_index = this_verse_index + 1;

    const this_verse = selected_filtered_verses[this_verse_index];
    var next_verse = "End of Selection";
    
    if (index_exists(selected_filtered_verses, next_verse_index)) {
        return [this_verse, selected_filtered_verses[next_verse_index]];
    } else {
        return [this_verse, next_verse];
    }
}

function index_exists(array, index) {
    return index >= 0 && index < array.length;
}

function generate() {
    const all_filtered_verses = mesh_filters(this_chapter_verses, this_page_verses);
    const selected_filtered_verses = all_filtered_verses[choose_filter(all_filtered_verses)];
    return generate_random_verse(selected_filtered_verses);
}

export { generate };
