import { getActiveTask, getSelectedTask } from './task-sorted.js';

const boardOfNew = document.querySelector('#new-tasks');
const boardOfCurrent = document.querySelector('#current-tasks');
const boardOfComplete = document.querySelector('#complete-tasks');

const boardList = document.querySelectorAll('.tasks__board');

let activeBoard = null;

const initBoard = (board) => {
  board.addEventListener('dragenter', () => {
    board.classList.add('tasks__board--drag');
    activeBoard = board;
  });

  board.addEventListener('dragleave', () => {
    board.classList.remove('tasks__board--drag');
  });

  board.addEventListener('dragend', (evt) => {
    if (activeBoard === board || activeBoard.querySelector('.tasks__item')) {
      return;
    }
    console.log('append')
    const list = activeBoard.querySelector('.tasks__list');
    list.appendChild(evt.target);
  });
};

export { initBoard };
