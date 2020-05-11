const createNewList = () => {
  const listContainer = document.createElement('div');
  Object.assign(listContainer, { className: 'app-list' });
  const listSubcontainer = document.createElement('div');
  Object.assign(listSubcontainer, { className: 'p-1 rounded-sm bg-primary shadow' });
  listContainer.appendChild(listSubcontainer);
  const board = document.querySelector('#board');
  board.appendChild(listContainer);

  //List_Header

  const inputListForm = document.createElement('form');
  Object.assign(inputListForm, { className: 'app-list-form align-middle p-1 position-relative' });
  const inputListTitle = document.createElement('input');
  Object.assign(inputListTitle, { className: 'app-list-input form-control form-control-sm', placeholder: 'Tareas importantes', type: 'text', value: '@@title', title: 'Editar el título de la lista' });
  inputListForm.appendChild(inputListTitle);
  listSubcontainer.appendChild(inputListForm);

  const optnListContainer = document.createElement('div');
  Object.assign(optnListContainer, { className: 'app-list-options' });

  const optnListIcon = document.createElement('span');
  Object.assign(optnListIcon, { className: 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v' });
  optnListContainer.appendChild(optnListIcon);
  inputListForm.appendChild(optnListContainer);

  const btnsListContainer = document.createElement('div');
  Object.assign(btnsListContainer, { className: 'app-list-btns btn-group btn-group-sm' });
  optnListContainer.appendChild(btnsListContainer);

  const dltBtn = document.createElement('button');
  Object.assign(dltBtn, { type: 'button', className: 'btn btn-light text-muted border shadow-sm', title: 'Borrar esta tarjeta' });

  const dltIcon = document.createElement('span');
  Object.assign(dltIcon, { className: 'fas fa-trash-alt' });
  dltBtn.appendChild(dltIcon);
  btnsListContainer.appendChild(dltBtn);

  const mvLeftBtn = document.createElement('button');
  Object.assign(dltBtn, { type: 'button', className: 'btn btn-light text-muted border shadow-sm app-list-move-left', title: 'Mover esta lista hacia la izquierda' });

  const mvLeftIcon = document.createElement('span');
  Object.assign(mvLeftIcon, { className: 'fas fa-arrow-left' });
  mvLeftBtn.appendChild(mvLeftIcon);
  btnsListContainer.appendChild(mvLeftBtn);

  const mvRightBtn = document.createElement('button');
  Object.assign(dltBtn, { type: 'button', className: 'btn btn-light text-muted border shadow-sm  app-list-move-right', title: 'Mover esta lista hacia la derecha' });

  const mvRightIcon = document.createElement('span');
  Object.assign(mvRightIcon, { className: 'fas fa-arrow-right' });
  mvRightBtn.appendChild(mvRightIcon);
  btnsListContainer.appendChild(mvRightBtn);

  //List_Footer

  const addCardSection = document.createElement('button');
  Object.assign(addCardSection, { type: 'button', id: 'add-card-btn', className: 'ml-1 btn btn-primary btn-sm text-white-50', title: 'Añadir una nueva tarjeta' });
  const addCardIcon = document.createElement('span');
  Object.assign(addCardIcon, { className: 'fas fa-plus' });
  const addCardContent = document.createTextNode(' Añadir otra tarjeta');
  addCardSection.appendChild(addCardIcon);
  addCardSection.appendChild(addCardContent);
  listSubcontainer.appendChild(addCardSection);
};

const addListBtn = document.querySelector('#add-list-btn');
addListBtn.addEventListener('click', createNewList);
