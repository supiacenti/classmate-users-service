import * as userService from '../src/services/users.service'
import { __TEST__USERS__ } from '../src/services/users.service'

describe('User Service', () => {
  beforeEach(() => {
    __TEST__USERS__.length = 0
  })

  it('deve criar um novo usuário', () => {
    const user = userService.createUser('Fulano', 'fulano@email.com', 'ADMIN')
    expect(user).toHaveProperty('id')
    expect(user.name).toBe('Fulano')
    expect(user.email).toBe('fulano@email.com')
    expect(user.role).toBe('ADMIN')
  })

  it('deve retornar todos os usuários', () => {
    userService.createUser('Fulano', 'fulano@email.com', 'ADMIN')
    const users = userService.getAllUsers()
    expect(users.length).toBe(1)
  })

  it('deve atualizar um usuário', () => {
    const created = userService.createUser('Antigo Nome', 'antigo@email.com', 'MEMBER')
    const updated = userService.updateUser(created.id, 'Novo Nome', 'novo@email.com')
    expect(updated.name).toBe('Novo Nome')
    expect(updated.email).toBe('novo@email.com')
  })

  it('deve deletar um usuário', () => {
    const created = userService.createUser('Del', 'del@email.com', 'MEMBER')
    const deleted = userService.deleteUser(created.id)
    expect(deleted).toBe(true)
  })

  it('deve lançar erro ao atualizar usuário inexistente', () => {
    expect(() => {
      userService.updateUser('id-nao-existe', 'Nome', 'email')
    }).toThrow('Usuário não encontrado')
  })

  it('deve lançar erro ao deletar usuário inexistente', () => {
    expect(() => {
      userService.deleteUser('id-invalido')
    }).toThrow('Usuário não encontrado')
  })
})
