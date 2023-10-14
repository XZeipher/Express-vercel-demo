const express = require('express');
const { Quiz } = require('anime-quiz');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or 3000 as a fallback

app.get('/quiz', (req, res) => {
  const { getRandom } = new Quiz();
  const randomAnime = getRandom();
  res.json({ anime: randomAnime });
});

app.get('/', (req , res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

