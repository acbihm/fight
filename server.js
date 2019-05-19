const express = require('express');
const path = require('path');
var data = require('./src/data.json');
//soon I will pull from a DB instead

const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/combos', (req, res) => {
  const topThree = 3;

  Generate some passwords
  const combos = Array.from(Array(topThree).keys()).map(i =>
    data(3, false)
  )

  const combos = data.map(playerName => {
    if (playerName) {
      console.log(playerName.name)
    } else {
      return null
    }
    return playerName;
  });
  // Return them as json
  res.json(combos[1].name);
  console.log(`Sent the top ${topThree} players who scored the most combos`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/new', (req, res) => {
   //add Mongoose constructor here
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server listening on port ${port}`);
