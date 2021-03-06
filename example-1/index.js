// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
//console.log('The notes app in running!');

const model = new NotesModel;
const view = new NotesView(model);
model.addNote('I LOVE Lucas!');
model.addNote('I LOVE my peer group!');
view.displayNotes();

//console.log(model.getNotes());