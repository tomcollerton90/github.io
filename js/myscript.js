var para = {
  duration: 1500,
  delay: 1500,

  origin: 'bottom',
  scale: 0,
  opacity: 0
}

var index = {
  duration: 2000,
  delay: 1200,
  distance: '100px',

  origin: 'top',
  scale: 0,
  opacity: 100


}

var imag = {
      duration: 2000,
      easing: 'ease-in-out',
      origin: 'bottom',

      delay: 200,
      opacity: 0,
      scale: 1

  }
  var infoanimation = {
    duration: 500,
    easing: 'ease-in',
    origin: 'bottom',

    opacity: 0,
    scale: 1

}
var infoanimation1 = {
  duration: 1000,
  easing: 'ease-in',
  origin: 'bottom',

  opacity: 0,
  scale: 1

}
  var longimag = {
      duration: 1300,

      scale: 0,
      opacity: 0

  }
  //Scroll Reveal  ------------>

$(document).ready(function() {
  window.sr = ScrollReveal();



  sr.reveal('h1', imag);
  sr.reveal('.nav-list', index);
  sr.reveal('.info-wrapper', infoanimation);
  sr.reveal('.info-extended-col1', infoanimation);
  sr.reveal('.info-extended-col2', infoanimation);
  sr.reveal(' .images-wrapper', infoanimation1);
  sr.reveal('#contacts', infoanimation1);

  

 
var textWrapper = document.querySelector('.collerton .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.collerton .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 1500 + 45 * (i+1)
  });

  





});
