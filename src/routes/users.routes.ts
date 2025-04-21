import { Router } from 'express'
import * as controller from '../controllers/users.controller'
import { verifyToken } from '../middlewares/auth.middleware'

const router = Router()

router.get('/', verifyToken, controller.getUsers)
router.get('/:id', verifyToken, controller.getUser)
router.post('/', verifyToken, controller.createUser)
router.put('/:id', verifyToken, controller.updateUser)
router.delete('/:id', verifyToken, controller.deleteUser)

export default router
