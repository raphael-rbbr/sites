$(document).ready(function() {
  const RandomBtn = document.querySelector('#click_me');
  let btntext = document.getElementById("btn");
  btn
  let count = 0;
  let disp = document.getElementById("display");
  let counter = document.getElementById("counter");





  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }



  function ChangeColorBtn() {
    $("#click_me").css("background-color", getRandomColor());
  }
  function ChangeColorBg() {
    $("#body").css("background-color", getRandomColor());
  }

  function ChangeColorFont() {
    $("#btn").css("color", getRandomColor());
  }

  function Relativeposition() {
    let randomTop = Math. floor(Math. random() * 25) + 1;
    let randomLeft = Math. floor(Math. random() * 83) + 1;
    RandomBtn.style.top = randomTop+'vw';
    RandomBtn.style.left = randomLeft+'vw';}

  function SizeVariation() {
    let randomHigh = Math. floor(Math. random() * (40 - 2 + 1) + 2);
    let randomWid = Math. floor(Math. random() * (40 - 2 + 1) + 2);
    RandomBtn.style.width = randomWid+'vw';
    RandomBtn.style.height = randomHigh+'vw';}

  function Absoluteposition() {
    RandomBtn.style.position = "absolute";
    let randomTop = Math. floor(Math. random() * 80) + 1;
    let randomLeft = Math. floor(Math. random() * 85) + 1;
    RandomBtn.style.top = randomTop+'vw';
    RandomBtn.style.left = randomLeft+'vw';}


  function FontVariation() {
    let randomfont = Math. floor(Math. random() * (60 - 5 + 1) + 5);
    $("#btn").css("font-size", randomfont);
  }

  RandomBtn.addEventListener('click', () => {

    count++;
    disp.innerHTML = count;

    if (count == 100) {
      window.alert("YOU WON THE GAME!!!! -- Signed The Button")
      ;}
    else if (count >= 90) {
      ChangeColorBg()
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      FontVariation()
      ;}
    else if (count > 80) {
      ChangeColorFont()
      ChangeColorBg()
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      FontVariation()
      ;}
    else if (count == 80) {
      window.alert("Don't give up! You are almost there! -- Signed The Button")
      ;}
    else if (count >= 70) {
      ChangeColorFont()
      ChangeColorBg()
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      FontVariation()
      ;}
    else if (count >= 60) {
      ChangeColorBg()
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      FontVariation()
      ;}
    else if (count > 50) {
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      FontVariation()
      ;}
    else if (count == 50) {
      counter.classList.remove("hide");}

    else if (count >= 40) {
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      FontVariation()
      ;}
    else if (count >= 30) {
      Absoluteposition()
      SizeVariation()
      ChangeColorBtn()
      ;}
    else if (count == 20) {
      window.alert("Now I'll try harder to hide -- Signed The Button");}
    else if (count > 20) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 10) {
      SizeVariation()
      Relativeposition()
    ;}
    else {
      Relativeposition();}

  })})
