let express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/todos', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      error: 'Title and Description are required'
    });
  }

  // Simulate data for demonstration
  let todos = [
    {
      id: 1,
      title: 'Clean the kitchen',
      description: 'I have been feeling unorganized lately. I am putting all my dishes on top of each other, so it's hard to find what I'm looking for.'
    },
    {
      id: 2,
      title: 'Do laundry',
      description: 'It is time for me to do some laundry. Now that the clothes are ready, I can start my day off right!'
    }
  ];

  todos.push({
    id: todos.length + 1,
    title: `Task ${todos.length + 1}`,
    description: `I have completed a task and now I am feeling refreshed`
  });

  req.session.todos = todos;

  res.json({ success: true });
});

app.get('/todos', (req, res) => {
  if (!req.session.todos || !req.session.todos.length) {
    return res.status(403).json({
      error: 'You are not authorized to view the todos'
    });
  }

  const { tasks } = req.session.todos;
  res.json({ tasks });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
