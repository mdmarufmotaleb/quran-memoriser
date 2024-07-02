import * as chapter_1 from './chapter_1.js';
import * as chapter_2 from './chapter_2.js';
import * as chapter_3 from './chapter_3.js';
import * as chapter_4 from './chapter_4.js';
import * as chapter_105 from './chapter_105.js';
import * as chapter_106 from './chapter_106.js';
import * as chapter_107 from './chapter_107.js';
import * as chapter_108 from './chapter_108.js';
import * as chapter_109 from './chapter_109.js';
import * as chapter_110 from './chapter_110.js';
import * as chapter_111 from './chapter_111.js';
import * as chapter_112 from './chapter_112.js';
import * as chapter_113 from './chapter_113.js';
import * as chapter_114 from './chapter_114.js';

const all_chapters = [
    { verses: chapter_1.chapter_1_verses },
    { verses: chapter_2.chapter_2_verses },
    { verses: chapter_3.chapter_3_verses },
    { verses: chapter_4.chapter_4_verses }
];

//fix this next. check the below codes esp all verses.

const chapter_and_verse_number = {};

all_chapters.forEach((chapter, index) => {
    const chapter_number = index + 1;
    const number_of_verses = Object.keys(chapter.verses).length;
    chapter_and_verse_number[chapter_number] = number_of_verses;
});


function get_all_verses() {
    let merged_verses = ["Placeholder string for index 0"];

    all_chapters.forEach(chapter => {
        merged_verses = merged_verses.concat(Object.values(chapter.verses));
    });

    return merged_verses;

}
const all_verses = get_all_verses();

export { all_chapters, chapter_and_verse_number, all_verses };
