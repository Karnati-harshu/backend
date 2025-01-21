import { Request, Response } from 'express'
import { RequestHandler } from 'express'
import prisma from '../prisma'


export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    console.log(tasks)
    res.status(200).json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error in fetching Tasks.' })
  }
};


export const getTaskById: RequestHandler = async (req, res, next) => {
  const { id } = req.params
  try {
    const task = await prisma.task.findUnique({
      where: { id: Number(id) },
    });
    if (!task) {
      res.status(404).json({ error: 'Cannot find Task.' });
      return
    }
    res.status(200).json(task)
  } catch (error) {
    console.error(error)
    next(error)
  }
};


export const updateTaskCompletion = async (req: Request, res: Response) => {
  const { taskId } = req.params
  const { completed } = req.body

  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(taskId) }, 
      data: { completed },  
    });

    res.status(200).json(updatedTask)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task.' })
  }
};


export const createTask = async (req: Request, res: Response) => {
  const { title, color } = req.body
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        color,
      },
    })
    res.status(201).json(newTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to create task.' })
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, color, completed } = req.body
  try {
    const updatedTask = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, color, completed },
    })

    res.status(200).json(updatedTask)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to update task.' })
  }
};


export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({
      where: { id: Number(id) },
    })

    res.status(204).send()
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to delete task.' })
  }
};
