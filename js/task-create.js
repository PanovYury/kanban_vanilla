import { initTask } from './task-sorted.js';

const newTasksContainer = document.querySelector('#new-tasks .tasks__list');

const template = document.querySelector('#task')
  .content
  .querySelector('.tasks__item');

const createTask = (value = '') => {
  const taskElement = template.cloneNode(true);
  taskElement.textContent = value;

  initTask(taskElement);
  newTasksContainer.append(taskElement);
};

export { createTask };
