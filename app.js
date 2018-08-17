document.addEventListener('DOMContentLoaded', () => {
    //use anime.js to animate circles
    let animateCircles = anime({
        targets: 'div',
        opacity: .5,
        translateX: '13.5rem',
        translateY: '15rem',
        scale: [1, 3],
        rotate: '.25turn',
        delay: function(el, index) {
            return index * 500
        },
        direction: 'alternate',
        loop: true,
        duration: 3000
      });

    let animateTitle = anime({
        targets: 'h1',
        translateY: '15rem',
        opacity: 50,
        loop: 1,
    })

    let transformBox = anime({
        targets: 'div',
        borderRadius: [ '0','100'],
    })


    let srcUrl;
    let preview = document.getElementById('audio_preview');
    fetch(`https://itunes.apple.com/lookup?id=834506800`)
        .then(response => response.json())
        .then( (data) => {
                srcUrl = data.results[0].previewUrl;
                preview.setAttribute(`src`, `${srcUrl}`)
                
        })

    const lastBox = document.getElementsByClassName('box')[4];
    lastBox.addEventListener('click', (ev) => {
        preview.play()
    })
    
    
})