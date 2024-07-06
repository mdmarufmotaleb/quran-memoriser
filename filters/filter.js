var min_chapter = 1;
var max_chapter = null;

var min_page = null;
var max_page = null;

var min_hizb = 4;
var max_hizb = 4;

function filter(min, max) {
    if (min === null || max === null) {
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var chapter_number = filter(min_chapter, max_chapter);
var page_number = filter(min_page, max_page);
var hizb_number = filter(min_hizb, max_hizb);


export { chapter_number, page_number, hizb_number };