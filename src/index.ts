import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { tasksRouter } from './routes/taskRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5001;

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

app.use('/tasks', tasksRouter);


app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
