



const min_chapter = 2;
const max_chapter = 2;

const min_page = 1;
const max_page = 2;

function filter(min, max) {
    return Math.floor((Math.random() * max) + min);
}

const chapter_number = filter(min_chapter, max_chapter);
const page_number = filter(min_page, max_page);

function sum_filters(chapter_number, page_number){
//to implement
}


export { chapter_number, page_number };