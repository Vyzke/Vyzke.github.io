const textInput = document.getElementById('textInput');
const includeSpecial = document.getElementById('includeSpecial');
const wordCount = document.getElementById('wordCount');
const characterCount = document.getElementById('characterCount');
const specialCount = document.getElementById('specialCount');
const clearButton = document.getElementById('clearButton');

// Feature 1: Count words separated by spaces, tabs, or new lines.
function countWords(text) {
  const trimmedText = text.trim();
  return trimmedText === '' ? 0 : trimmedText.split(/\s+/u).length;
}

// Feature 2: Detect punctuation and symbols (not letters, numbers, or whitespace).
function isSpecialCharacter(character) {
  return !/[\p{L}\p{M}\p{N}\s]/u.test(character);
}

function updateCounts() {
  const text = textInput.value;
  const characters = Array.from(text); // Unicode characters, including emoji
  const specialCharacters = characters.filter(isSpecialCharacter).length;

  wordCount.textContent = countWords(text);
  specialCount.textContent = specialCharacters;
  characterCount.textContent = includeSpecial.checked
    ? characters.length
    : characters.length - specialCharacters;
}

textInput.addEventListener('input', updateCounts);
includeSpecial.addEventListener('change', updateCounts);
clearButton.addEventListener('click', () => {
  textInput.value = '';
  updateCounts();
  textInput.focus();
});

updateCounts();
