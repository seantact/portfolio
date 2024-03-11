let mainClickButton = document.getElementById('main-click-button');

mainClickButton.addEventListener('onhover', () => {
  mainClickButton.style.backgroundColor = 'red';
});

mainClickButton.addEventListener('click', () => {
  alert('Button clicked');
});