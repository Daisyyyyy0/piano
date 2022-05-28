const keys = document.querySelectorAll('.key')

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach( key => {
    key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    console.log(whiteKeyIndex);
    console.log(blackKeyIndex);
    if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])  //這兩行無法運作，key無法和noteAudio元素連接
    if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
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