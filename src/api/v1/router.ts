import { Router } from 'express'
import { translate } from './controller'

const router = Router()

router.post('/', translate)

export default router