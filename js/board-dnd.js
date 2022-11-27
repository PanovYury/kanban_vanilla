import { appendTask } from './board.js';

// Доска на которую навели
let selectedBoard = null;

const initBoard = (board) => {
  // Выделение доски на которую перетаскиываем элемент
  board.addEventListener('dragenter', () => {
    board.classList.add('board--selected');
    selectedBoard = board;
  });

  // Очищение выделения выбранной доски
  board.addEventListener('dragleave', () => {
    board.classList.remove('board--selected');
  });

  // Перетаскивание на пустую доску
  board.addEventListener('dragend', (evt) => {
    // Таже доска или есть задачи в списке
    if (!selectedBoard || selectedBoard === board || selectedBoard.querySelector('.task')) {
      return;
    }

    // Добавление задачи в список
    appendTask(selectedBoard, evt.target);
  });
};

export { initBoard };
