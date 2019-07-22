/* 
Movie Reception 

This neural network checks a movie's rotten tomatoes and imdb scores and determines how positive the movie's reception is.
*/

var scoreVal = [.8,.9,.77];

const { Layer, Network } = window.synaptic;

let inputLayer = new Layer(3);
let hiddenLayer = new Layer(4);
let outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

let chromaNetwork = new Network({
	input: inputLayer,
	hidden: [hiddenLayer],
	output: outputLayer
});

// Train ChromaNetwork
var learningRate = .1;
for (var i = 0; i < 10000; i++) {
  for (let trainingSet of trainingData) {
    chromaNetwork.activate(trainingSet[0]);
    chromaNetwork.propagate(learningRate, trainingSet[1]);
  }
}

//show scores
var criticScoreId = document.getElementById('rt-critic-score');
var criticScoreDisplay = document.getElementById('critic');
var audienceScoreId = document.getElementById('rt-audience-score');
var audienceScoreDisplay = document.getElementById('audience');
var imdbScoreId = document.getElementById('imdb-score');
var imdbScoreDisplay = document.getElementById('imdb');
var avgRt = document.getElementById('average-score-rt');
var avgAll = document.getElementById('average-score-all');
var ratingId = document.getElementById('rating');
var avg;
var avgR;

criticScoreId.value = scoreVal[0] * 100;
audienceScoreId.value = scoreVal[1] * 100;
imdbScoreId.value = scoreVal[2] * 10;
criticScoreDisplay.innerHTML = scoreVal[0] * 100;
audienceScoreDisplay.innerHTML = scoreVal[1] * 100;
imdbScoreDisplay.innerHTML = scoreVal[2] * 10;
getAverages();

function getAverages(){
  avgR = Math.round(((scoreVal[0] + scoreVal[1]) / 2) * 100);
  avg = Math.round(((scoreVal[0] + scoreVal[1] + scoreVal[2] + .02) / 3) * 100);  
  avgRt.innerHTML = avgR;
  avgAll.innerHTML = avg;
}

function adjustScore(input){
  let result = chromaNetwork.activate(input);
  let output = document.getElementById('output');
  var rating;
  var adjustedScore = (result[0] * 100) + avg;
  
  /*if (adjustedScore > 100) {
	  adjustedScore = 100;
  }*/
  
  output.innerHTML = adjustedScore;
  document.getElementById('o-result').innerHTML = result;
  
  if (adjustedScore >= 90) {
	rating = "Critically acclaimed movie, likely a great movie";
  } else if (
    adjustedScore < 90 && adjustedScore >= 75
  ){
    rating = "Largely favorable reception";
  } else if (
    adjustedScore < 75 && adjustedScore >= 60
  ){
    rating = "Positive reception";
  } else if (
    adjustedScore < 60 && adjustedScore >= 50
  ){
	  rating = "Average film with mixed reviews";
  } else if (
    adjustedScore < 50 && adjustedScore >= 30
  ){
    rating = "Generally negative remarks were given.";
  } else if (adjustedScore < 30){
	  rating = "Largely negative reception";
  }
  
  ratingId.innerHTML = rating;
}

var counter = 0;

document.addEventListener("input", function() {
  console.log('test' + counter, scoreVal);
  counter++;
  getAverages();
});

criticScoreId.oninput = () => {
  //display score
  criticScoreDisplay.innerHTML = criticScoreId.value;
  //set value 
  scoreVal[0] = Number(criticScoreId.value/100);
  //run test with new values
  adjustScore(scoreVal);
};

audienceScoreId.oninput = () => {
  audienceScoreDisplay.innerHTML = audienceScoreId.value;
  scoreVal[1] = Number(audienceScoreId.value/100);
  adjustScore(scoreVal);
};

imdbScoreId.oninput = () => {
  imdbScoreDisplay.innerHTML = imdbScoreId.value;
  scoreVal[2] = Number(imdbScoreId.value/10);
  adjustScore(scoreVal);
};

getAverages();
adjustScore(scoreVal);