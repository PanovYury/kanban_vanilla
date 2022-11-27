import { createTask } from './task.js';
import { appendTask } from './board.js';

const taskInput = document.querySelector('#task-input');
const appendButton = document.querySelector('#task-append');

const updateButtonState = () => {
  if (taskInput.value.length > 2) {
    appendButton.removeAttribute('disabled');
  } else {
    appendButton.setAttribute('disabled', true);
  }
}

updateButtonState();
taskInput.addEventListener('input', () => updateButtonState());

appendButton.addEventListener('click', () => {
  const taskElement = createTask(taskInput.value);
  const board = document.querySelector('.board');
  appendTask(board, taskElement);

  taskInput.value = '';
  updateButtonState();
});
