import { this_chapter_verses } from "./filters/chapters_filter.js";
import { this_page_verses } from "./filters/pages_filter.js";

function mesh_filters(this_chapter_verses, this_page_verses) {
    const meshed_filters = [];
    if (this_chapter_verses !== null) {
        meshed_filters.push(this_chapter_verses);
    }
    if (this_page_verses !== null) {
        meshed_filters.push(this_page_verses);
    }
    return meshed_filters;
}

function choose_filter(all_filtered_verses) {
    return Math.floor(Math.random() * all_filtered_verses.length);
}

function generate_random_verse(selected_filtered_verses) {
    const verse_index = Math.floor(Math.random() * selected_filtered_verses.length);

    const verse = selected_filtered_verses[verse_index];
    

    return [verse];
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
