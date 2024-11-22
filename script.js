$(document).ready(function() {
  const RandomBtn = document.querySelector('#click_me');
  let count = 0;
  let disp = document.getElementById("display");

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

  RandomBtn.addEventListener('click', () => {

    count++;
    disp.innerHTML = count;

    if (count == 100) {
      console.log("parabens")
      ;}
    else if (count >= 90) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 80) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 70) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 60) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 50) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 40) {
      Absoluteposition()
      SizeVariation()
      ;}
    else if (count >= 30) {
      Absoluteposition()
      SizeVariation()
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
