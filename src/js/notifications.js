const NOTOFICATION_DELAY = 3000;
const refs = {
  notification: document.querySelector('.js-alert'),
};
let timeoutId = null;
refs.notification.addEventListener('click', onNotificationClick);
showNotificaions();

function onNotificationClick() {
  hidenNotification();
  clearTimeout(timeoutId);
}

function showNotificaions() {
  refs.notification.classList.add('is-visible');
  timeoutId = setTimeout(() => {
    hidenNotification();
    console.log('закрыли алерт автоматически');
  }, NOTOFICATION_DELAY);
}

function hidenNotification() {
  refs.notification.classList.remove('is-visible');
}
