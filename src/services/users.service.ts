import { User } from '../models/user.model'
import { v4 as uuidv4 } from 'uuid'

let users: User[] = []

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

export const updateUser = (id: string, name: string, email: string): User | null => {
  const user = users.find(u => u.id === id)
  if (!user) return null

  user.name = name
  user.email = email
  return user
}

export const deleteUser = (id: string): boolean => {
  const originalLength = users.length
  users = users.filter(u => u.id !== id)
  return users.length < originalLength
}
