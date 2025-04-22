import * as userController from '../src/controllers/users.controller'
import * as userService from '../src/services/users.service'
import { __TEST__USERS__ } from '../src/services/users.service'

describe('User Controller', () => {
  let req: any
  let res: any

  beforeEach(() => {
    __TEST__USERS__.length = 0

    req = {}
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn()
    }
  })

  it('deve criar usuário e retornar 201', () => {
    req.body = { name: 'Teste', email: 'teste@email.com', role: 'ADMIN' }
    userController.createUser(req, res)
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalled()
  })

  it('deve deletar usuário com sucesso', () => {
    const created = userService.createUser('Excluir', 'excluir@email.com', 'MEMBER')
    req.params = { id: created.id }

    userController.deleteUser(req, res)

    expect(res.status).toHaveBeenCalledWith(204)
    expect(res.send).toHaveBeenCalled()
  })
})
