document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: 'div',
        opacity: .5,
        translateX: '13.5rem',
        translateY: '15rem',
        scale: [1, 3],
        rotate: '.25turn',
        delay: function(el, index) {
          return index * 80;
        },
        direction: 'alternate',
        loop: true,
        duration: 3000
      });

    anime({
        targets: 'h1',
        translateY: '15rem',
        opacity: 50,
        loop: false,
    })

    anime({
        targets: 'div',
        borderRadius: '100',
        strokeWidth: '25'
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