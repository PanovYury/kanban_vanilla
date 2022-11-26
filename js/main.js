import { getMockTasks } from './data.js';
import { createTask } from './task-create.js';

import './task-form.js';
import { initBoard } from './board.js';

const boardList = document.querySelectorAll('.tasks__board');
boardList.forEach(board => initBoard(board));

getMockTasks().forEach(task => createTask(task));
