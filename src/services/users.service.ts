import { User } from '../models/user.model'
import { v4 as uuidv4 } from 'uuid'

//let users: User[] = []

let users: User[] = [
  {
    id: '1',
    name: 'Isabela',
    email: 'mario@admin.com',
    role: 'ADMIN'
  },
  {
    id: '2',
    name: 'João',
    email: 'joao@student.com',
    role: 'MEMBER'
  }
]

export const getAllUsers = (): User[] => users

export const getUserById = (id: string): User | undefined =>
  users.find(u => u.id === id)

export const createUser = (name: string, email: string, role: 'ADMIN' | 'MEMBER'): User => {
  const newUser: User = {
    id: uuidv4(),
    name,
    email,
    role
  }
  users.push(newUser)
  return newUser
}

export const updateUser = (id: string, name: string, email: string) => {
  const user = users.find((u) => u.id === id)
  if (!user) throw new Error('Usuário não encontrado')
  user.name = name
  user.email = email
  return user
}

export const deleteUser = (id: string) => {
  const index = users.findIndex((u) => u.id === id)
  if (index === -1) throw new Error('Usuário não encontrado')
  users.splice(index, 1)
  return true
}

// Expor somente para testes
export const __TEST__USERS__ = users