import express from 'express'
import { admEditMenu } from '../controller/AdmEditMenuCont.js'
const router = express.Router()

router.get('/',admEditMenu)
export default router