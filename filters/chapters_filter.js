import { all_chapters } from "../chapters/chapters.js";
import { chapter_number } from "./filter.js";

let this_chapter_verses = null;

var get_verses = (chapter) => {
    let chapter_verses = [];
    for (let verse_number in chapter) {
        if (chapter.hasOwnProperty(verse_number)) {
            chapter_verses.push(chapter[verse_number]);
        }
    }
    return chapter_verses;
};

if (chapter_number !== null) {
    var this_chapter = all_chapters[chapter_number - 1].verses;
    this_chapter_verses = get_verses(this_chapter);
}


export { this_chapter_verses };
