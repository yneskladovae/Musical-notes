const sounds = ['do', 're', 'mi', 'fa', 'sol', 'lja', 'si', 'Do']; 

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn'); 

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        const audio = document.getElementById(sound);
        (audio.paused) ? audio.play() : audio.currentTime = 0;
    })

    document.getElementById('buttons').appendChild(btn);
});