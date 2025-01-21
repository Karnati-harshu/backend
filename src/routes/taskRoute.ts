import { Router } from 'express';
import { getTasks, getTaskById, updateTaskCompletion, createTask, updateTask, deleteTask } from '../components/taskController';

export const tasksRouter = Router();

tasksRouter.patch('/:taskId', updateTaskCompletion);


tasksRouter.get('/', getTasks);
tasksRouter.get('/:id', getTaskById);
tasksRouter.put('/:id', updateTask);  
tasksRouter.post('/', createTask);
tasksRouter.delete('/:id', deleteTask);
