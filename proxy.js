const express = require('express')
var cors = require('cors')

const app = express()
app.use(cors())

const port = 3000

app.get('/',async (req, res) => {
    try {
        const response = await fetch('https://survey-aol7o6mvqa-el.a.run.app/problem/fa57f076-26a9-4850-add5-204862fe59ba/questions');
        const data = await response.json();
        res.json(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})