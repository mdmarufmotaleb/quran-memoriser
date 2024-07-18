import { all_verses } from '../chapters/chapters.js';
import { page_number } from './filter.js';

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
        case 4:
            start_index = 23;
            end_index = 30;
            break;
        case 5:
            start_index = 31;
            end_index = 35;
            break;
        case 6:
            start_index = 36;
            end_index = 43;
            break;
        case 7:
            start_index = 44;
            end_index = 54;
            break;
        case 8:
            start_index = 55;
            end_index = 63;
            break;
        case 9:
            start_index = 64;
            end_index = 67;
            break;
        case 10:
            start_index = 68;
            end_index = 75;
            break;
        case 11:
            start_index = 76;
            end_index = 82;
            break;
        case 12:
            start_index = 83;
            end_index = 89;
            break;
        case 13:
            start_index = 90;
            end_index = 94;
            break;
        
        default:
            start_index = 0;
            end_index = 0;
            break;
    }

    return { start_index, end_index };
};

export function this_page_verses() {
    var pages = {};
    var this_page_number = page_number();

    if (this_page_number !== null) {
        for (let i = 1; i <= this_page_number; i++) {
            var { start_index, end_index } = get_verse_range(i);
            pages[i] = all_verses.slice(start_index, end_index + 1);
        }
    
        var this_page_verses = pages[this_page_number];
    } else {
        var this_page_verses = null;
    }

    return this_page_verses;

}
