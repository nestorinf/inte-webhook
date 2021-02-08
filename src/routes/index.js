import {requestPost} from '../controllers/webhook'
import {Router} from 'express'
const router = Router()
router.post('/webhook',requestPost)
export default router