import { chapter_verses } from './chapters/chapters.js';
import { chapter_number } from './filters/chapters_filter.js';

try {
    const test_box = document.querySelector('#test');
    test_box.value = "test box";
    test_box.value = chapter_number;
} catch {
    console.log("delete this later it doesnt load if u run it from console");
}


const chapters = {};
//const chapter_number = 2; 

var verse_range = [];
for (var i = 40; i <= 50; i++) {
    verse_range.push(i);
}

chapter_verses.forEach((chapter, index) => {
    const chapter_number = index + 1;
    const number_of_verses = Object.keys(chapter.verses).length;
    chapters[chapter_number] = number_of_verses;
});



function generate_random_verse(chapter_number) {
    const max_verse_number = chapters[chapter_number];

    const this_chapter = chapter_verses[chapter_number - 1].verses;
    //const this_chapter_with_valid_verses = valid_chapter_verses[chapter_number - 1].valid_verses;

    let random_verse;

    //do {
    random_verse = Math.floor(Math.random() * max_verse_number) + 1;
    //} while (this_chapter_with_valid_verses[random_verse]);

    const generated_verse = this_chapter[random_verse];
    const verse_number = find_verse_number(this_chapter, generated_verse);

    return verse_number;
}



function find_verse_number(chapter, verse_to_find) {
    let verse_number = null;
    
    for (let verses in chapter) {
        if (chapter[verses] === verse_to_find) {
            verse_number = verses;
            break; 
        }
    }
    return verse_number;
}

function show_words(verse, number_of_words) {
    var result;
    try {
        result = verse.split(" ").slice(0, number_of_words).join(" ");
    } catch {
        result = "End of Chapter";
    }
    return result;

    
}

function is_end_of_verse(verse, number_of_words) {
    if (show_words(verse, number_of_words) == show_words(verse, number_of_words + 1)) {
        return true;
    } else {
        return false;
    }
}

function main() {    
    var verse_number = generate_random_verse(chapter_number); 
    const this_verse = (chapter_verses[chapter_number - 1].verses)[verse_number];
    
    var verse_number = (parseInt(verse_number) + 1).toString();
    var next_verse = "";
    try {
        next_verse = (chapter_verses[chapter_number - 1].verses)[verse_number];
    } catch {
        next_verse = "End of Surah";
    };
    
    var number_of_words = 3;


    console.log("This verse: " + show_words(this_verse, number_of_words));
    try {
        console.log("Next Verse: " + show_words(next_verse, number_of_words));
    } catch {
        console.log("End of Chapter");
    }
    console.log("delete after");

    try {

        //THE ERROR IS HERE. CHECK IF NEXT VERSE EXISTS
        const this_verse_output = document.querySelector('#current_verse_output');
        const next_verse_output =  document.querySelector('#next_verse_output');

        const this_verse_trimmed = show_words(this_verse, number_of_words);
        const next_verse_trimmed = show_words(next_verse, number_of_words);

        this_verse_output.value = this_verse_trimmed;
        next_verse_output.value = next_verse_trimmed;
        
        if (!is_end_of_verse(this_verse, number_of_words)) {
            this_verse_output.value = "..." + this_verse_trimmed;
        } 

        try {
            if (!is_end_of_verse(next_verse, number_of_words)) {
                next_verse_output.value = "..." + next_verse_trimmed;
            } 
        } catch {
            next_verse_output.value = "End of Chapter";
        }
        
    } catch {
        console.log("skippi since it doesnt work from consoleng");
    }

}

main();

export { main, show_words };