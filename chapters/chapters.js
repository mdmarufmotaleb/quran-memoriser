import * as chapter1 from './chapter_1.js';
import * as chapter2 from './chapter_2.js';
import * as chapter3 from './chapter_3.js';

const chapter_verses = [
    { chapter: 'Chapter 1', verses: chapter1.chapter_1_verses, excluded: chapter1.invalid_chapter_1_verses },
    { chapter: 'Chapter 2', verses: chapter2.chapter_2_verses, excluded: chapter2.invalid_chapter_2_verses },
    { chapter: 'Chapter 3', verses: chapter3.chapter_3_verses, excluded: chapter3.invalid_chapter_3_verses },
    // Add more chapters as needed
];

const valid_chapter_verses = chapter_verses.map(chapter => {
    const valid_verses = {};
    Object.keys(chapter.verses).forEach(key => {
        const verseText = chapter.verses[key];
        if ((key in chapter.excluded && chapter.excluded[key] === verseText)) {
            valid_verses[key] = verseText;
        }
    });
    return { chapter: chapter.chapter, valid_verses: valid_verses };
});

export { chapter_verses, valid_chapter_verses };
