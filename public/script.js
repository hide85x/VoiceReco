const alf= document.getElementById('alf');
const ebb= document.getElementById('ebb');
const audio= document.querySelector('audio');


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
console.log(SpeechRecognition);

const recognition = new SpeechRecognition();
recognition.interimResults = true;
let firstP= document.querySelector('.firstp')
let p = document.createElement('p');
const words = document.querySelector('.words');
words.prepend(p)
recognition.addEventListener('result', e => {
    const transcript=         //  e.results[0][0].transcript, nasz transcript jest zagniezdzony. to krótsza metoda
    Array.from(e.results)
        .map(result=> result[0])
          .map(result=> result.transcript)
        .join('')
console.log(transcript)
if( transcript.includes('turn the lights on')) {
    words.style.backgroundColor="yellow"
    
}else if (transcript.includes('turn the lights off')) {
    words.style.backgroundColor="black"
}else if (transcript.includes('play Alfred')){
    alf.play()
}else if (transcript.includes('stop')) {
    alf.pause(),
    ebb.pause()
}else if (transcript.includes('play ebb and flow')) {
    ebb.play()
}

p.textContent=transcript

if(e.results[0].isFinal) {
    p= document.createElement('p')
    words.prepend(p)
}

});
// const reload= reload()
// firstP.addEventListener('click', reload)

recognition.addEventListener('end', recognition.start)
recognition.start()