const keys = document.querySelectorAll('.key')

keys.forEach( key => {
    key.addEventListener('click', () => playNote(key))
})

function playNote(key){
    const noteAudio = document.getElementById(key.dataset.note)
    console.log(noteAudio);
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')

    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}