var min_chapter = 1;
var max_chapter = 1;

document.getElementById('select_min_chapter').addEventListener('change', function() {
    if (this.value === '') {
        min_chapter = null;
    } else {
        min_chapter = parseInt(this.value); 
    }

    if(min_chapter > max_chapter) {
        max_chapter = min_chapter;
        document.getElementById('select_max_chapter').value = max_chapter.toString();
    }

    chapter_number = filter(min_chapter, max_chapter);
   
});

document.getElementById('select_max_chapter').addEventListener('change', function() {
    if (this.value === '') {
        max_chapter = null;
    } else {
        max_chapter = parseInt(this.value); 
    }

    if(max_chapter < min_chapter) {
        min_chapter = max_chapter;
        document.getElementById('select_min_chapter').value = min_chapter.toString();
    }

    chapter_number = filter(min_chapter, max_chapter);
   
});

var min_page = null;
var max_page = null;


document.getElementById('select_min_page').addEventListener('change', function() {
    if (this.value === '') {
        min_page = null;
    } else {
        min_page = parseInt(this.value); 
    }

    if(min_page > max_page) {
        max_page = min_page;
        document.getElementById('select_max_page').value = max_page.toString();
    }

    page_number = filter(min_page, max_page);
   
});

document.getElementById('select_max_page').addEventListener('change', function() {
    if (this.value === '') {
        max_page = null;
    } else {
        max_page = parseInt(this.value);
    }

    if(max_page < min_page) {
        min_page = max_page;
        document.getElementById('select_min_page').value = min_page.toString();
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


export { chapter_number, page_number, hizb_number, min_page, max_page };