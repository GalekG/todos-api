import './dotenv';
import * as express from 'express';

import { port } from '../../config/consts';
import { Todo } from '../../src/shared/domain/models/Todo.model';

const PORT = port ?? 3000;

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('TODOs API');
});

app.post('/todos', async (req, res) => {
  const {
    name,
    description
  } = req.body;

  const result = await Todo.create({
    name, description
  });

  res.json(result);

});

app.get('/todos', async (req, res) => {

  const id = req.query.id ? req.query.id : null;

  const where = {};

  if (id) {
    where['id'] = id;
  }

  try {
    const todos = await Todo.findAll({
      where
    });

    res.json(todos);
  } catch (e) {
    console.log(e);
    res.status(500).send(`Error: ${e}`);
  }

});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});