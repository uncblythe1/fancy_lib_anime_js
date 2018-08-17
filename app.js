document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: 'div',
        opacity: .5,
        translateX: '13.5rem',
        // translateY: '10rem',
        scale: [1, 3],
        rotate: '.25turn',
        delay: function(el, index) {
          return index * 80;
        },
        direction: 'alternate',
        loop: true,
        duration: 5000
      });

    anime({
        targets: 'h1',
        translateY: '15rem',
        opacity: 50,
        loop: false,
    })

    let animateBorder = anime({
        targets: 'div',
        borderRadius: '50%',
        strokeWidth: '25'
    })


   
    






})