var min_chapter = null;
var max_chapter = null;

var min_page = null;
var max_page = null;

var min_hizb = null;
var max_hizb = null;

//these 3 are probably not needed. the exported values get a rng anyways without using these.
var this_chapter_number = filter(min_chapter, max_chapter);
var this_page_number = filter(min_page, max_page);
var this_hizb_number = filter(min_hizb, max_hizb);

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

    this_chapter_number = filter(min_chapter, max_chapter);
   
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

    this_chapter_number = filter(min_chapter, max_chapter);
   
});

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

    this_page_number = filter(min_page, max_page);
   
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
    this_page_number = filter(min_page, max_page);

});


document.getElementById('select_min_hizb').addEventListener('change', function() {
    if (this.value === '') {
        min_hizb = null;
    } else {
        min_hizb = parseInt(this.value); 
    }

    if(min_hizb > max_hizb) {
        max_hizb = min_hizb;
        document.getElementById('select_max_hizb').value = max_hizb.toString();
    }

    this_hizb_number = filter(min_hizb, max_hizb);
   
});

document.getElementById('select_max_hizb').addEventListener('change', function() {
    if (this.value === '') {
        max_hizb = null;
    } else {
        max_hizb = parseInt(this.value);
    }

    if(max_hizb < min_hizb) {
        min_hizb = max_hizb;
        document.getElementById('select_min_hizb').value = min_hizb.toString();
    }
    this_hizb_number = filter(min_hizb, max_hizb);

});

function filter(min, max) {
    if (min === null || max === null) {
        return null;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function hizb_number() {
    return filter(min_hizb, max_hizb);
}

export function page_number() {
    return filter(min_page, max_page);
}

export function chapter_number() {
    return filter(min_chapter, max_chapter);
}

// export function hizb_number() {
//     return this_hizb_number;
// }

// export function page_number() {
//     return this_page_number;
// }

// export function chapter_number() {
//     return this_chapter_number;
// }