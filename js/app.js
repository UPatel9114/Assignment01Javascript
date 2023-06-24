// Assignment 1 | COMP1073 Client-Side JavaScript
/*
Students:
1]Vilas Desai  -  200522471
2]Udaykumar Patel  -  200522548	
3]Bishnu Bohora  -  200519767
*/

//Creating new strings for each objective for the later use to store the words/phrase and concate them into a sentence.
let nounStr = "";
let verbStr = "";
let adjStr = "";
let noun1Str = "";
let placeStr = "";
let stringConcate = nounStr + ' ' + verbStr + ' ' + adjStr + ' ' + noun1Str + ' ' + placeStr; //String created to concate all the random words/phrase selected to create a full sentence.


//Creating array/list of the words using nth-child to store the data in each different list accordingly.
const nounList = document.querySelectorAll(".noun:nth-child(1) > div");
const verbList = document.querySelectorAll(".verbs:nth-child(2) > div");
const adjList = document.querySelectorAll(".adj:nth-child(3) > div");
const noun1List = document.querySelectorAll(".nou:nth-child(4) > div");
const placeLIst = document.querySelectorAll(".places:nth-child(5) > div");

//Creating new constants for each button.
const nounBT = document.querySelector(".nounBt"); 
const verbsBT = document.querySelector(".verbsBt");
const adjBT = document.querySelector(".adjectiveBt");
const noun1BT = document.querySelector(".noun1Bt");
const placesBT = document.querySelector(".placesBt");

//textToSpeak constant
const textToSpeak = document.querySelector("#textToSpeak");

// Function to obtain random indexes from the list/array.
function getRandomIndex(array) {
	return Math.floor(Math.random()*array.length); //using math.floor and math.random methods
}

// Function to obtain random word from the list/array.
function getRandomWord(array) {
	return array[getRandomIndex(array)].textContent;
}

// Function to speak the word using the Speech Synthesis API
const synth = window.speechSynthesis;
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
	}

//Functions created for each individual button to get random words/phrases and create concatinated string.
function clickNounBT() {
	nounStr = getRandomWord(nounList);
	textToSpeak.textContent = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	stringConcate = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	speakNow(nounStr);
}
function clickVerbBT() {
	verbStr = getRandomWord(verbList);
	textToSpeak.textContent = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	stringConcate = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	speakNow(verbStr);
}
function clickAdjBT() {
	adjStr = getRandomWord(adjList);
	textToSpeak.textContent = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	stringConcate = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	speakNow(adjStr);
}
function clickNoun1BT() {
	noun1Str = getRandomWord(noun1List);
	textToSpeak.textContent = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	stringConcate = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	speakNow(noun1Str);
}
function clickPlaceBT() {
	placeStr = getRandomWord(placeLIst);
	textToSpeak.textContent = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	stringConcate = nounStr+' '+verbStr+' '+adjStr+' '+noun1Str+' '+placeStr;
	speakNow(placeStr);
}



// Adds the event listeners to buttons
nounBT.addEventListener("click", clickNounBT);
verbsBT.addEventListener("click", clickVerbBT);
adjBT.addEventListener("click", clickAdjBT);
noun1BT.addEventListener("click", clickNoun1BT);
placesBT.addEventListener("click", clickPlaceBT);


const speakButton = document.querySelector('.speak'); // Speak button to speak the concatinated string

speakButton.addEventListener('click', () => {
	speakNow(stringConcate);
});


//Created the arrays manually for generating for the purpose of generating a story.
const nouns = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The Elephant", "The Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed", "hugged", "jumped on"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat", "a smiling"];
const n4 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes","in my boat"];

//buttons imployment
const generateStoryBtn = document.getElementById('generateStoryBtn');
const speakStoryBtn = document.getElementById('speakStoryBtn');
const storyContainer = document.getElementById('storyContainer');

//Function creted to generate random story and display it.
function generatePhrase() {
	const noun = nouns[Math.floor(Math.random() * nouns.length)];
	const verb = verbs[Math.floor(Math.random() * verbs.length)];
	const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
	const n1 = n4[Math.floor(Math.random() * n4.length)];
	const place = places[Math.floor(Math.random() * places.length)];
	const phrase = `${noun} ${verb} ${adjective} ${n1} ${place}.`;
	return phrase;
  }
  
  // Generate a random story by concatenating multiple phrases
  function generateStory() {
	const storyLength = 4; //Number of phrases.
	let story = "";
	for (let i = 0; i < storyLength; i++) { //for loop
	  story += generatePhrase()+' '
	}
	return story.trim();
  }
  
  // Function to speak the word using the Speech Synthesis API
  function speakText(text) {
	const utterance = new SpeechSynthesisUtterance(text);
	synth.speak(utterance);
  }
  
  // Generate and display's the story
  function generateAndDisplayStory() {
	const story = generateStory();
	storyContainer.textContent = story;
  }
  
  generateStoryBtn.addEventListener('click', generateAndDisplayStory);
  speakStoryBtn.addEventListener('click', function() {
	const story = storyContainer.textContent;
	speakText(story);
  });