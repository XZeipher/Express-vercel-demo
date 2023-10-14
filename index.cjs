const express = require('express');
const { Quiz } = require('anime-quiz');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/quiz', (req, res) => {
  const { getRandom } = new Quiz();
  const randomAnime = getRandom();
  res.json({ anime: randomAnime });
});

app.post('/quizid', (req, res) => {
  const quizId = req.body.id; 
  const { getQuizById } = new Quiz();
  const animeQuiz = getQuizById(quizId);
  
  if (animeQuiz) {
    res.json({ quiz: animeQuiz });
  } else {
    res.status(404).json({ error: 'Quiz not found' });
  }
});

app.get('/', (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
