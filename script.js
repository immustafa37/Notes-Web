// Select DOM elements
const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNote');
const notesDisplay = document.getElementById('notesDisplay');
const clearNotesBtn = document.getElementById('clearNotes');

// Load existing notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Function to display notes on the page
function displayNotes() {
  notesDisplay.innerHTML = '';
  if (notes.length === 0) {
    notesDisplay.innerHTML = '<p class="no-notes">No notes yet. Add one above!</p>';
  }
  notes.forEach((note, index) => {
    const noteEl = document.createElement('div');
    noteEl.classList.add('note');
    noteEl.innerHTML = `
      <p>${note}</p>
      <button class="delete-note" data-index="${index}" title="Delete Note">&times;</button>
    `;
    notesDisplay.appendChild(noteEl);
  });
}

// Function to update localStorage
function updateLocalStorage() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  