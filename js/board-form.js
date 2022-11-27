import { renderBoards } from './board.js';

const boardInput = document.querySelector('#board-input');
const appendButton = document.querySelector('#board-append');

const updateButtonState = () => {
  if (boardInput.value.length > 2) {
    appendButton.removeAttribute('disabled');
  } else {
    appendButton.setAttribute('disabled', true);
  }
}

updateButtonState();
boardInput.addEventListener('input', () => updateButtonState());

appendButton.addEventListener('click', () => {
  renderBoards([{title: boardInput.value}]);

  boardInput.value = '';
  updateButtonState();
});
