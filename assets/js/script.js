// SELECT
const selectHeader = document.querySelectorAll('.form__select-header');
const selectItem = document.querySelectorAll('.form__select-item');
const selectValue = document.getElementById('select-value');

selectHeader.forEach(item => {
  item.addEventListener('click', selectToggle)
});

selectItem.forEach(item => {
  item.addEventListener('click', selectChoose)
});

function selectToggle() {
  this.parentElement.classList.toggle('form__select--active');
}

function selectChoose() {
  const text = this.innerText,
    select = this.closest('.form__select'),
    currentText = select.querySelector('.form__select-current');
  currentText.innerText = text;
  select.classList.remove('form__select--active');
  selectValue.value = text;
}


const select = document.querySelector('#select');
document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(select);

  if (!withinBoundaries) {
    select.classList.remove('form__select--active');
  }
})

// SCROLL
new SimpleBar(document.getElementById('custom-scroll'), {
  autoHide: false,
  classNames: {
    scrollbar: 'scrollbar__scroll',
    track: 'scrollbar__track'
  }
});

// RANGE
const range = document.getElementById('range');
const rangeValue = document.querySelector('.form__range-value');

rangeValue.innerHTML = range.value + ' %';

range.oninput = function () {
  rangeValue.innerHTML = this.value + ' %';
}

// FILE
let inputs = document.querySelectorAll('.form__file');
Array.prototype.forEach.call(inputs, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.form__file-text').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.form__file-text').innerText = 'Selected files: ' + countFiles;
    else
      label.querySelector('.form__file-text').innerText = labelVal;
  });
});

//MOBILE-MENU
let burger = document.querySelector('#icon-menu');
// let overlay = document.querySelector('#overlay');
let mobileMenu = document.querySelector('#mobile-menu');
let menuLinks = document.querySelectorAll('.mobile-menu__link');

burger.addEventListener('click', function () {
  this.classList.toggle('burger--active');
  document.querySelector('body').classList.toggle('lock');
  mobileMenu.classList.toggle('mobile-menu--active');

  if (burger.classList.contains('burger--active')) {
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        document.querySelector('body').classList.remove('lock');
        burger.classList.remove('burger--active');
        mobileMenu.classList.remove('mobile-menu--active');
      })
    })
  }
})

//REMOVE <br>
if (window.innerWidth <= 992) {
  document.querySelector('.title--main br').style.display = 'none';
}

window.addEventListener('resize', function () {
  if (window.innerWidth <= 992) {
    document.querySelector('.title--main br').style.display = 'none';
  } else {
    document.querySelector('.title--main br').style.display = 'inline-block';
  }
});