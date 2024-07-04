import { trimmed_this_verse, trimmed_next_verse } from "./format_verse.js";

function show_verse() {
    document.getElementById('show_verse').textContent = trimmed_this_verse;
}

window.show_verse = show_verse;