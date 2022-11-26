import { createTask } from './task-create.js';

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
  createTask(taskInput.value);
  taskInput.value = '';
});
