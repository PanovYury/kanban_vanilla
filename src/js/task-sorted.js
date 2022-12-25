let activeTask = null;
let selectedTask = null;
let position = null;

const getType = (target, cursor, nested = false) => {
  const elemCoord = target.getBoundingClientRect();
  if (!nested) {
    const elCenter = elemCoord.y + elemCoord.height / 2;
    return cursor < elCenter ? 'top' : 'bottom';
  }

  const elTop = elemCoord.y + elemCoord.height / 3;
  const elBottom = elemCoord.y + elemCoord.height / 3 * 2;
  
  if (cursor < elTop) {
    return 'top';
  }
  if (cursor > elBottom) {
    return 'bottom';
  }
  return 'middle';
};

const initTask = (task) => {
  task.addEventListener('dragover', (evt) => {
    if (evt.target === activeTask) {
      return;
    }

    task.dataset.dragType = getType(evt.target, evt.clientY);
    position = task.dataset.dragType;
  });

  task.addEventListener('dragstart', (evt) => {
    activeTask = evt.target;
  });

  task.addEventListener('dragleave', (evt) => {
    task.dataset.dragType='';
  });

  task.addEventListener('dragenter', (evt) => {
    if (activeTask === evt.target) {
      return;
    }
    selectedTask = evt.target;
  });

  task.addEventListener('dragend', (evt) => {
    if (!activeTask || !selectedTask || !position) {
      return;
    }

    const insertIn = position === 'top' ? 'beforebegin' : 'afterend';
    selectedTask.insertAdjacentElement(insertIn, activeTask)
    position = null;
  });
};

const getActiveTask = () => activeTask;

const getSelectedTask = () => selectedTask;

export { getActiveTask, getSelectedTask, initTask };
