# Neural Network with Synaptic Js

### Summary

This neural network determine's an adjusted rating for box office movie critical reception based on the movie's Rotten Tomatoes (RT) critic score, RT audience score and Imdb score.


First the network is set as

> const { Layer, Network } = window.synaptic;

Then the layers are defined. There is an input layer, 1 hidden layer and an output layer. 

Currently, the  the equation t adds the result to the scores' average. 
### *Customize the adjusted score equation to tweak the algorithm*.

Try at https://sleighs.github.io/Movie-Reception-Neural-Network/

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
