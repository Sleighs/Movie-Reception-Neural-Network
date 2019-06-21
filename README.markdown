# Movie Reception Neural Network with Synaptic Js

### Summary
Determine a movie's general critical reception based on the movie's Rotten Tomatoes(RT) critic score, RT audience score and imdb score.

Currently, the algorithm currently adds the result to the average . *Customize the adjusted score equation to tweak the adjusted score*.

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
