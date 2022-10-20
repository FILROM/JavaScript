document.addEventListener("keypress", onKeyPress)

const KeyToSound = {
    'a' : 's1',
    's' : 's2',
}

function onKeyPress(ev) {
    const sound = KeyToSound[ev.key]
    playSound(sound)
}

function playSound(sound) {
    if (sound) {
        retuen
    }
    const audioTag = document.querySelector()
    audioTag.currentTime = 0
    audioTag.play()
}

