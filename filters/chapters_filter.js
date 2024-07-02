import { all_chapters } from "../chapters/chapters.js";
import { chapter_number } from "./filter.js";

//TO DO NEXT: the main file stuff into here for the chapters filter, then mesh the filters   


console.log("chapter number:");
console.log(chapter_number);

const this_chapter = all_chapters[chapter_number - 1].verses;

function get_verses(this_chapter) {
    let this_chapter_verses = [];
    
    for (let verse_number in this_chapter) {
        if (this_chapter.hasOwnProperty(verse_number)) {
            this_chapter_verses.push(this_chapter[verse_number]);
        }
    }
    
    return this_chapter_verses;
}

const this_chapter_verses = get_verses(this_chapter);


//find a way to get rid of ths_chapter?
export { this_chapter, this_chapter_verses }