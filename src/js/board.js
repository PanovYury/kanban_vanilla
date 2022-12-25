import { initBoard } from './board-dnd.js';
import { createTask } from './task.js';

const boardsContainer = document.querySelector('#boards');
const boardTemplate = document.querySelector('#board')
  .content
  .querySelector('.board');

const appendTask = (board, task) => {
  const boardTasks = board.querySelector('.board__tasks');
  boardTasks.append(task);
};

const createBoard = (title, tasks) => {
  const boardElement = boardTemplate.cloneNode(true);
  
  const boardTitle = boardElement.querySelector('.board__title');
  boardTitle.textContent = title;

  if (tasks && Array.isArray(tasks)) {
    tasks
      .map(createTask)
      .forEach(task => appendTask(boardElement, task));
  }

  initBoard(boardElement);
  return boardElement;
};

const renderBoards = (boards) => {
  if (!Array.isArray(boards)) {
    throw new Error(`Argment board must be array, but got: ${boards}`)
  }
  const boardsElements = boards.map(({title, tasks}) => createBoard(title, tasks));
  
  const fragment = document.createDocumentFragment();
  fragment.append(...boardsElements);

  boardsContainer.append(fragment);
};

export { createBoard, appendTask, renderBoards };
