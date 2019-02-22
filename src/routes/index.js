import express from 'express'
import {
  hello
} from './hello'

const router = express.Router()

router.route('/').get(hello)


export default router