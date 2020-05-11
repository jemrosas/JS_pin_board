//Create new Card

const createNewCard = () => {
  //Contenedor general
  const newArticle = document.createElement('article');
  Object.assign(newArticle, {
    className: 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm',
    title: 'Abrir la tarjeta',
  });

  const list = document.querySelector('.p-1');
  list.appendChild(newArticle);

  // Contenedor etiquetas
  const badgeContainer = document.createElement('div');
  const badge = document.createElement('span');
  Object.assign(badge, {
    className: 'badge badge-secondary bg-success',
  });

  const badgeContent = document.createTextNode('JS');
  badge.appendChild(badgeContent);
  badgeContainer.appendChild(badge);
  newArticle.appendChild(badgeContainer);

  //Contenedor título
  const titleContainer = document.createElement('div');
  const title = document.createElement('h3');
  Object.assign(title, {
    className: 'h6',
  });
  const titleContent = document.createTextNode('Título');

  title.appendChild(titleContent);
  titleContainer.appendChild(title);
  newArticle.appendChild(titleContainer);

  //Contenedor opciones

  const optnContainer = document.createElement('div');
  Object.assign(optnContainer, { className: 'text-black-50' });

  const openCardIcon = document.createElement('small');
  Object.assign(openCardIcon, { className: 'pr-2 fas fa-align-left' });
  optnContainer.appendChild(openCardIcon);

  const checkedIcon = document.createElement('small');
  Object.assign(checkedIcon, { className: 'far fa-check-square' });
  optnContainer.appendChild(checkedIcon);

  const tasksIcon = document.createElement('small');
  Object.assign(tasksIcon, { title: 'Subtareas completadas: 3 de 5' });
  const tasksContent = document.createTextNode(' 3/5');
  tasksIcon.appendChild(tasksContent);

  optnContainer.appendChild(tasksIcon);
  newArticle.appendChild(optnContainer);

  // Contenerdor flechas
  const arrowContainer = document.createElement('div');
  Object.assign(arrowContainer, { className: 'app-card-btns btn-group-vertical btn-group-sm' });
  newArticle.appendChild(arrowContainer);

  const arrowUp = document.createElement('button');
  Object.assign(arrowUp, { type: 'button', className: 'btn btn-light text-muted border shadow-sm app-card-move-up', title: 'Mover esta tarjeta hacia arriba' });
  arrowContainer.appendChild(arrowUp);

  const arrowUpIcon = document.createElement('span');
  Object.assign(arrowUpIcon, { className: 'fas fa-arrow-up' });
  arrowUp.appendChild(arrowUpIcon);

  const arrowDown = document.createElement('button');
  Object.assign(arrowDown, { type: 'button', className: 'btn btn-light text-muted border shadow-sm app-card-move-down', title: 'Mover esta tarjeta hacia abajo' });
  arrowContainer.appendChild(arrowDown);

  const arrowDownIcon = document.createElement('span');
  Object.assign(arrowDownIcon, { className: 'fas fa-arrow-down' });
  arrowDown.appendChild(arrowDownIcon);
};

document.querySelectorAll('#add-card-btn').forEach((card) => {
  card.addEventListener('click', createNewCard);
});
