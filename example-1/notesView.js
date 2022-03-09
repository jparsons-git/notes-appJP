
class NotesView {

  constructor (notesModel) {
    this.notesModel = notesModel;  
    this.mainContainerEl = document.querySelector('#main-container');
    console.log(this.mainContainerEl);
  }

  displayNotes(){
    const allNotes = this.notesModel.getNotes();
    
    allNotes.forEach(note => {
      let divElem = document.createElement("div");
      divElem.innerText=note;
      divElem.className='note';
      this.mainContainerEl.append(divElem);
    });
  }

}

module.exports = NotesView;