

const min_chapter = 1;
const max_chapter = 1;

const min_page = 1;
const max_page = 3;

function filter(min, max) {
    return Math.floor((Math.random() * max) + min);
}


const chapter_number = filter(min_chapter, max_chapter);
const page_number = filter(min_page, max_page);



export { chapter_number, page_number };