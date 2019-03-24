window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

console.log(SpeechRecognition);

const recognition = new SpeechRecognition;
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.prepend(p);

recognition.addEventListener('result', e => {
	let p = document.createElement('p');
	const transcript = Array.from(e.results)
	
		.map(result => result[0])
		.map(result => result.transcript)
		.join('');
		


	p.textContent = transcript;

	if (e.results[0].isFinal) {
		p = document.createElement('p');
		words.prepend(p);
	}
	if (transcript.includes('dog')) {
		alert('BAD WORD!')
		console.log('a doggy eat dog!')
		
	}
});

recognition.addEventListener('end', recognition.start);

recognition.start();