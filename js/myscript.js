var para = {
  duration: 1500,
  delay: 1500,
  distance: '50px',

  origin: 'left',
  scale: 0,
  opacity: 0
}

var paraheader = {
  duration: 2000,

  origin: 'left',
  scale: 0,
  opacity: 0
}

var imag = {
      duration: 2000,
      easing   : 'ease-in-out',
      distance: '0px',

      delay: 200,
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

  //   sr.reveal('.design-image img', {
  //   afterReveal: function(el) {
  //   anime({
  //           targets: el,
  //           easing: 'linear',

  //               width: [
  //                   {value: ['-800%','100%'], duration: 1000 }
  //               ]
  //       });    }
  // });


  // sr.reveal('.thumbnail ', images);

  sr.reveal('h1', imag);
  // sr.reveal('.collerton', para);

  // sr.reveal('p', para);



  // sr.reveal('img', imag);
  // sr.reveal('project-img-long', longimag);

  // sr.reveal('h3', imag);
  // sr.reveal('h4', imag);

  // var animeRevealerOpts: {
  //                 easing: 'easeOutCubic',
  //                 delay: function(t,i) {
  //                     return i*100;
  //                 },
  //                 translateX: [
  //                     {value: ['101%','0%'], duration: 400 },
  //                     {value: ['0%','-101%'], duration: 400}
  //                 ]
  //             };
  //             var animeOpts: {
  //                 duration: 900,
  //                 easing: 'easeOutCubic',
  //                 delay: function(t,i) {
  //                     return 400+i*100;
  //                 },
  //                 opacity: {
  //                     value: 1,
  //                     duration: 1,
  //                     easing: 'linear'
  //                 },
  //                 scale: [0.8,1]
  //             };


 


  





});
