var min_chapter = null;
var max_chapter = null;

var min_page = 1;
var max_page = 2;


document.getElementById('select_min_page').addEventListener('change', function() {
    if (this.value === '') {
        min_page = null;
    } else {
        min_page = parseInt(this.value); 
    }
    page_number = filter(min_page, max_page);
   
});

document.getElementById('select_max_page').addEventListener('change', function() {
    if (this.value === '') {
        max_page = null;
    } else {
        max_page = parseInt(this.value);
    }
    page_number = filter(min_page, max_page);

});

var min_hizb = null;
var max_hizb = null;

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