import { all_verses } from '../chapters/chapters.js';
import { page_number } from './filter.js';
//to do print out min max page in functio below
//test imports
import { min_page, max_page } from './filter.js';

var get_verse_range = (page_number) => {
    let start_index, end_index;

    switch (page_number) {
        case 1:
            start_index = 1;
            end_index = 6;
            break;
        case 2:
            start_index = 7;
            end_index = 11;
            break;
        case 3:
            start_index = 12;
            end_index = 22;
            break;
        default:
            start_index = 0;
            end_index = 0;
            break;
    }

    return { start_index, end_index };
};

export function this_page_verses() {
    console.log("min page from pages filer: " + min_page);
    console.log("max page from pages filer: " + max_page);

    var pages = {};

    if (page_number !== null) {
        for (let i = 1; i <= page_number; i++) {
            var { start_index, end_index } = get_verse_range(i);
            pages[i] = all_verses.slice(start_index, end_index + 1);
        }
    
        var this_page_verses = pages[page_number];
    } else {
        var this_page_verses = null;
    }

    return this_page_verses;

}
