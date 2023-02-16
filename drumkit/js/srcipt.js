document.addEventListener('keypress', onKeyPress)

const pressToPlayBtn = {
    'q': document.querySelector('#sound1'),
    'w': document.querySelector('#sound2'),
    'e': document.querySelector('#sound3'),
    'r': document.querySelector('#sound4'),
    't': document.querySelector('#sound5'),
    'y': document.querySelector('#sound6'),
}

function onKeyPress(event) {
    if(event.key === 's')
    {
        Record()
    }
    else if(event.key === 'd') {
        Play()
    }
    else{
        console.log(event.key)
        document.querySelector(`#${event.key}`).classList.add('key-play')
        setTimeout(() => {document.querySelector(`#${event.key}`).classList.remove('key-play')}, 200)
        const sound = pressToPlayBtn[event.key]
        playSound(sound)
    }
    
}

function playSound(sound) {
    if (!sound){
        return
    }   
    sound.currentTime = 0
    sound.play()
}

var recordedSound = new Map()
var counter = 1
var Recording = false

function Record() {
    Recording = true
    counter++
    document.querySelector('#Record').classList.add('recordup')
    if (counter === 2){
        recordedSound.clear()
    }
    if (counter % 2 === 1){
        counter = 1
        document.querySelector('#Record').classList.remove('recordup')
        Recording = false
        return
    }
    document.addEventListener('keypress', addToChannel)
}


function addToChannel(event) {
    if (counter % 2 === 1)
    {
        counter = 1
        return
    }
    if(event.key === 'r' && key-code === 82){
        return
    }
    const sound = pressToPlayBtn[event.key]
    playSound(sound)

    if (sound !== undefined){
    recordedSound.set(Date.now(), sound)
    }

}

function Play(){
    document.querySelector('#Playing').classList.add('playing')

    if(Recording === true)
    {
        return
    }
    console.log('start')
    var i = 0
    var keys = Array.from(recordedSound.keys())
    var time = keys[1] - keys[0]

    timeoutFunc(time, i)
    
    function timeoutFunc(time, i){
        setTimeout(
            () => {
                if (i === recordedSound.size){
                    document.querySelector('#Playing').classList.remove('playing')
                    return
                }

                playSound(recordedSound.get(keys[i]))
                
                if (i > 0){
                    time = keys[i + 1] - keys[i]
                }

                if (i < recordedSound.size){
                    i++
                    timeoutFunc(time, i)


                }
            },
            time
        )
    }

}