import { all_chapters } from '../chapters/chapters.js';

//IT WORKS BUT CHANGE IT TO RIGHT TO LEFT its working in main file not here idk why
const merge_chapters = () => {
    let merged_verses = ["Placeholder string for index 0"];

    all_chapters.forEach(chapter => {
        merged_verses = merged_verses.concat(Object.values(chapter.verses));
    });

    return merged_verses;
};

const number_of_pages = 3;

const pages = {};

const get_verse_range = (page_number) => {
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

const merged_verses = merge_chapters();

for (let i = 1; i <= number_of_pages; i++) {
    const { start_index, end_index } = get_verse_range(i);
    pages[i] = merged_verses.slice(start_index, end_index + 1);
}

const example_page = 2;
console.log(`Verses for page ${example_page}:`, pages[example_page]);
