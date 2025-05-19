const noteForm = document.getElementById('noteForm');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

noteForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const noteText = noteInput.value.trim();
  if (noteText !== '') {
    const li = document.createElement('li');
    li.textContent = noteText;
    notesList.appendChild(li);
    noteInput.value = '';
  }
});
