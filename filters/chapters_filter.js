const minimum_chapter_number = 1;
const maximum_chapter_number = 4;

function filter_by_chapter_number(minimum_chapter_number, maximum_chapter_number) {
    return Math.floor((Math.random() * maximum_chapter_number) + minimum_chapter_number);
}

const chapter_number = filter_by_chapter_number(minimum_chapter_number, maximum_chapter_number);
export { chapter_number };