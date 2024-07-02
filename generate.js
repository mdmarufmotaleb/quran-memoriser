import { this_chapter_verses } from "./filters/chapters_filter.js";
import { this_page_verses } from "./filters/pages_filter.js";

function mesh_filters(this_chapter_verses, this_page_verses) {
    return [this_chapter_verses, this_page_verses];
}

//currently selected between 0 and 1 since there are 2 items in mesh filters
function choose_filter() {
    return Math.floor(Math.random() * 2);
}

function generate_random_verse(selected_filtered_verses) {
    const this_verse_number = Math.floor(Math.random() * selected_filtered_verses.length);
    const next_verse_number = this_verse_number + 1;


    if (index_exists(selected_filtered_verses), next_verse_number) {
        console.log("Index exists for next verse");
        console.log("next verse: " + selected_filtered_verses[next_verse_number]);
        return [selected_filtered_verses[this_verse_number], selected_filtered_verses[next_verse_number]];
    } else {
        console.log("index doesnt exist for next verse");
        return [selected_filtered_verses[this_verse_number], "End of Chapter"]
    }
}

//this is faulty check this. also if we reach the end of the chpater, it says end of chapter. but end of page, it should say end of page etc;
function index_exists(array, index) {
    return index >= 0 && index < array.length;
}

const all_filtered_verses = mesh_filters(this_chapter_verses, this_page_verses);
const selected_filtered_verses = all_filtered_verses[choose_filter()];

const [this_verse, next_verse] = generate_random_verse(selected_filtered_verses);

export {this_verse, next_verse};


