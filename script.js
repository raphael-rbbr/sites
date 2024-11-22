$(document).ready(function() {
  const RandomBtn = document.querySelector('#click_me');

  RandomBtn.addEventListener('click', () => {
    let randomTop = Math. floor(Math. random() * 100) + 1;
    let randomRigth = Math. floor(Math. random() * 100) + 1;
      RandomBtn.style.top = randomTop+'vw';
      RandomBtn.style.right = randomRigth+'vw';
  });
              })
