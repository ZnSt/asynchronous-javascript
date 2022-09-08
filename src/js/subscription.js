import BSN from 'bootstrap.native';

const myModalInstance = new BSN.Modal('#myModal');

const refs = {
  modal: document.querySelector('#myModal'),
  btnSubcribe: document.querySelector('button[data-subscribe]'),
};

const PROMPT_DELAY = 1000;
const MAX_PROMP_ATTEENTIONS = 3;
let promptCounter = 0;
let hasSubscribed = false;

openModal();

refs.modal.addEventListener('hide.bs.modal', () => {
  openModal();
});
refs.btnSubcribe.addEventListener('click', () => {
  onSubscribeBtnClick();
});

function openModal() {
  if (promptCounter === MAX_PROMP_ATTEENTIONS || hasSubscribed) {
    console.log('Максимальное кол-во надоеданий или юзер подписался');
    return;
  }
  setTimeout(() => {
    console.log('Открываем модалку!');
    promptCounter += 1;
    myModalInstance.show();
  }, PROMPT_DELAY);
}

function onSubscribeBtnClick() {
  hasSubscribed = true;

  myModalInstance.hide();
}
