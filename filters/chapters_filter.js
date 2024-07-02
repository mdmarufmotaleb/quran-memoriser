import { all_chapters } from "../chapters/chapters.js";
import { chapter_number } from "./filter.js";

let this_chapter_verses = null;

const get_verses = (chapter) => {
    let chapter_verses = [];
    for (let verse_number in chapter) {
        if (chapter.hasOwnProperty(verse_number)) {
            chapter_verses.push(chapter[verse_number]);
        }
    }
    return chapter_verses;
};

if (chapter_number !== null) {
    const this_chapter = all_chapters[chapter_number - 1].verses;
    this_chapter_verses = get_verses(this_chapter);
}

console.log("chapter number:");
console.log(chapter_number);

export { this_chapter_verses };
