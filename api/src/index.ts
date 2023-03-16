import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

// GET endpoint
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// POST endpoint
interface PostRequest {
  name: string;
}

app.post('/', (req: Request<{}, {}, PostRequest>, res: Response) => {
  const { name } = req.body;
  res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
