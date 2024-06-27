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

const chapter_verses = [
    { chapter: 'Chapter 1', verses: chapter_1.chapter_1_verses },
    { chapter: 'Chapter 2', verses: chapter_2.chapter_2_verses },
    { chapter: 'Chapter 3', verses: chapter_3.chapter_3_verses },
    { chapter: 'Chapter 4', verses: chapter_4.chapter_4_verses }
    //{ chapter: 'Chapter 105', verses: chapter_105.chapter_105_verses },
];

const valid_chapter_verses = chapter_verses.map(chapter => {
    const valid_verses = {};
    Object.keys(chapter.verses).forEach(key => {
        const verseText = chapter.verses[key];
        valid_verses[key] = verseText;
    });
    return { chapter: chapter.chapter, valid_verses: valid_verses };
});

export { chapter_verses, valid_chapter_verses };
