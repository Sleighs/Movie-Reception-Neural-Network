# Neural Network with Synaptic Js

### Summary

This neural network determine's an adjusted rating for box office movie critical reception based on the movie's Rotten Tomatoes (RT) critic score, RT audience score and Imdb score.

### How it works
First Synaptic is initialized.
```javascript
const { Layer, Network } = window.synaptic;
```
This allows terms 'Layer' and 'Network' to used to create layers use them in the netork.

Then layers are defined and set to feed forward through the network.
```javascript
let inputLayer = new Layer(3);
let hiddenLayer = new Layer(4);
let outputLayer = new Layer(1);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);
```
After a network is created using the defined layers.
```javascript
let chromaNetwork = new Network({
input: inputLayer,
hidden: [hiddenLayer],
output: outputLayer
});
```

The network is then trained with the training data. **trainingSet[0]** hold possible input values and **trainingSet[1]** tells the machine how it should treat that set of values.
```javascript
var learningRate = .1;
for (var i = 0; i < 8000; i++) {
  for (let trainingSet of trainingData) {
    chromaNetwork.activate(trainingSet[0]);
    chromaNetwork.propagate(learningRate, trainingSet[1]);
  }
}
```

The network is now ready to run

In this application the network is used when ever the sliders are used for input. The **adjustScore** function receives the data for the network called **input** and returns a number in the **result** variable, displayed in the output table;
```javascript
  let result = chromaNetwork.activate(input);
```

### *Customize the adjusted score equation to tweak the algorithm*.
Currently, the adjusted score equation in this demo adds the output to the total average of movie scores.


Try at https://sleighs.github.io/SynapticJSNeuralNetwork/

### Training Data

The current data received has the following traits: 
- Favors 
  - rt scores from 70-100
  - rt audience scores over critic scores
  - imdb scores from 8-9.9
- Disfavors
  - rt scores below 60
  - imdb scores below 7
  - any movie with a 0 rating for any of the three scores
