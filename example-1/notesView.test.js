/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');

 describe('Page view', () => {
   it('display no paragraphs at the start', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
     expect(document.querySelectorAll('p').length).toBe(0);
   }); 

   it('display two paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote('I LOVE Lucas!');
    notesModel.addNote('I LOVE my peer group!');
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
   }); 

 });
