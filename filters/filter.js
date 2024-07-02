

const min_chapter = 1;
const max_chapter = null;

const min_page = 1;
const max_page = 3;

function filter(min, max) {
    if (min === null || max === null) {
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const chapter_number = filter(min_chapter, max_chapter);
const page_number = filter(min_page, max_page);

console.log("page number from filter.js: " + page_number);



export { chapter_number, page_number };