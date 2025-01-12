export default class CreatedElement {
  constructor(parent) {
    this.parent = parent;
    this.init();
  }

  init() {
    this.parent.insertAdjacentHTML('beforeend', '<h1>5. Домашнее задание к занятию "Работа с HTML-формами"</h1>');
    this.parent.insertAdjacentHTML('beforeend', '<h2>5.1 Popovers</h2>');
    this.parent.insertAdjacentHTML('beforeend', '<div class="forms"></div>');
    const forms = document.querySelector('.forms');
    forms.insertAdjacentHTML('beforeend', '<button type="button" class="btn">Click to toggle popover</button>');
  }
}
