import { all_verses } from '../chapters/chapters.js';
import { hizb_number } from './filter.js';

var hizb = {};

var get_verse_range = (hizb_number) => {
    let start_index, end_index;

    switch (hizb_number) {
        case 1:
            start_index = 1;
            end_index = 31;
            break;
        case 2:
            start_index = 32;
            end_index = 49;
            break;
        case 3:
            start_index = 50;
            end_index = 65;
            break;
        case 4:
            start_index = 66;
            end_index = 80;
            break;
        case 5:
            start_index = 81;
            end_index = 97;
            break;

        default:
            start_index = 0;
            end_index = 0;
            break;
    }

    return { start_index, end_index };
};

if (hizb_number !== null) {
    for (let i = 1; i <= hizb_number; i++) {
        var { start_index, end_index } = get_verse_range(i);
        hizb[i] = all_verses.slice(start_index, end_index + 1);
    }

    var this_hizb_verses = hizb[hizb_number];
} else {
    var this_hizb_verses = null;
}

export { this_hizb_verses };
