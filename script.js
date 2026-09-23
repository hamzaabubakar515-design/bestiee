const loveNotes = [
  'With every beat of my heart, I choose you.',
  'My favorite person is the one who makes my world feel warm.',
  'You are the calm in my chaos and the smile in my life.',
  'Every day with you feels like a little love story.',
  'You make my heart feel full, soft, and endlessly happy.'
];

const noteElement = document.getElementById('love-note');

if (noteElement) {
  let index = 0;
  setInterval(() => {
    index = (index + 1) % loveNotes.length;
    noteElement.textContent = loveNotes[index];
  }, 2600);
}
