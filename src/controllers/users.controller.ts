import { Request, Response } from 'express'
import * as userService from '../services/users.service'

export const getUsers = (req: Request, res: Response) => {
  const users = userService.getAllUsers()
  res.json(users)
}

export const getUser = (req: Request, res: Response) => {
  const user = userService.getUserById(req.params.id)
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' })
  res.json(user)
}

export const createUser = (req: Request, res: Response) => {
  const { name, email, role } = req.body
  const user = userService.createUser(name, email, role)
  res.status(201).json(user)
}

export const updateUser = (req: Request, res: Response) => {
  const { name, email } = req.body
  const updated = userService.updateUser(req.params.id, name, email)
  if (!updated) return res.status(404).json({ error: 'Usuário não encontrado' })
  res.json(updated)
}

export const deleteUser = (req: Request, res: Response) => {
  const success = userService.deleteUser(req.params.id)
  if (!success) return res.status(404).json({ error: 'Usuário não encontrado' })
  res.status(204).send()
}
