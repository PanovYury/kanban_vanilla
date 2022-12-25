import { initTask } from './task-sorted.js';

const template = document.querySelector('#task')
  .content
  .querySelector('.task');

const createTask = (value = '') => {
  const taskElement = template.cloneNode(true);
  taskElement.textContent = value;

  initTask(taskElement);
  return taskElement;
};

export { createTask };
