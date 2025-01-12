import CreatedElement from '../../components/createdElement';
import Tooltip from '../../components/tooltip';

test('test CreatedElement', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedElement(parent);
  expect(document.querySelector('button').classList.contains('btn')).toBe(true);
});

test('test Tooltip one clilk', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedElement(parent);
  const btn = document.querySelector('.btn');
  new Tooltip(btn);
  btn.click();
  expect(document.querySelector('.popover').classList.contains('popover')).toBe(true);
});

test('test Tooltip two click', () => {
  document.body.innerHTML = '<div class="container"></div>';
  const parent = document.querySelector('.container');
  /* eslint-disable no-new */
  new CreatedElement(parent);
  const btn = document.querySelector('.btn');
  new Tooltip(btn);
  btn.click();
  btn.click();
  expect(document.querySelector('.popover')).toBe(null);
});
