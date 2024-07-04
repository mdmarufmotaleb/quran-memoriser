

var min_chapter = 1;
var max_chapter = null;

var min_page = 1;
var max_page = 3;

function filter(min, max) {
    if (min === null || max === null) {
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var chapter_number = filter(min_chapter, max_chapter);
var page_number = filter(min_page, max_page);

console.log("page number from filter.js: " + page_number);



export { chapter_number, page_number };