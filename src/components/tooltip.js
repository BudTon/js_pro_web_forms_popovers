export default class Tooltip {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      const tooltipElement = document.querySelector('.popover');
      if (tooltipElement) {
        this.removeTooltip();
      } else {
        this.showTooltip();
      }
    });
  }

  showTooltip() {
    const tooltipElement = document.createElement('div');
    tooltipElement.classList.add('popover');
    tooltipElement.insertAdjacentHTML('beforeend', '<div class="popover-title">Popover title</div>');
    tooltipElement.insertAdjacentHTML('beforeend', '<p class="popover-content">Popover content</p>');
    document.body.appendChild(tooltipElement);
    const { top, left } = this.element.getBoundingClientRect();

    tooltipElement.style.left = `${left + this.element.offsetWidth / 2 - tooltipElement.offsetWidth / 2}px`;
    tooltipElement.style.top = `${top - this.element.offsetHeight - tooltipElement.offsetHeight / 2}px`;
  }

  /* eslint-disable class-methods-use-this */
  removeTooltip() {
    document.querySelector('.popover').remove();
  }
}
