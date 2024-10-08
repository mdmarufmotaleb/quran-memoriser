import { this_chapter_verses } from "./filters/chapters_filter.js";
import { this_page_verses } from "./filters/pages_filter.js";
import { this_hizb_verses } from "./filters/hizb_filter.js";


function mesh_filters(this_chapter_verses, this_page_verses, this_hizb_verses) {

    var meshed_filters = [];

    if (this_chapter_verses !== null) {
        meshed_filters.push(this_chapter_verses);
    }
 
    if (this_page_verses !== null) {
        meshed_filters.push(this_page_verses);
    }

    if (this_hizb_verses !== null) {
        meshed_filters.push(this_hizb_verses);
    }
    return meshed_filters;
}

function choose_filter(all_filtered_verses) {
    return Math.floor(Math.random() * all_filtered_verses.length);
}

function generate_random_verse(selected_filtered_verses) {
    var verse_index = Math.floor(Math.random() * selected_filtered_verses.length);
    return [selected_filtered_verses, verse_index];
}

function generate() {
    var all_filtered_verses = mesh_filters(this_chapter_verses(), this_page_verses(), this_hizb_verses());

    var selected_filtered_verses = all_filtered_verses[choose_filter(all_filtered_verses)];
    return generate_random_verse(selected_filtered_verses);
}

export { generate };
