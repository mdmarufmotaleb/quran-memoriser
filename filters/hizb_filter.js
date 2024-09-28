import { all_verses } from '../chapters/chapters.js';
import { hizb_number } from './filter.js';

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
        case 6:
            start_index = 98;
            end_index = 111;
            break;
        case 7:
            start_index = 112;
            end_index = 129;
            break;
        case 8:
            start_index = 130;
            end_index = 147;
            break;
        case 9:
            start_index = 148;
            end_index = 163;
            break;
        case 10:
            start_index = 164;
            end_index = 182;
            break;
        case 11:
            start_index = 183;
            end_index = 194;
            break;
        case 12:
            start_index = 195;
            end_index = 208;
            break;
        // case 8:
        //     start_index = 130;
        //     end_index = 147;
        //     break;
        // case 8:
        //     start_index = 130;
        //     end_index = 147;
        //     break;
        // case 8:
        //     start_index = 130;
        //     end_index = 147;
        //     break;
        default:
            start_index = 0;
            end_index = 0;
            break;
    }

    return { start_index, end_index };
};

export function this_hizb_verses() {
    var hizb = {};
    var this_hizb_number = hizb_number();

    if (this_hizb_number !== null) {
        for (let i = 1; i <= this_hizb_number; i++) {
            var { start_index, end_index } = get_verse_range(i);
            hizb[i] = all_verses.slice(start_index, end_index + 1);
        }
    
        var this_hizb_verses = hizb[this_hizb_number];
    } else {
        var this_hizb_verses = null;
    }
    return this_hizb_verses
}