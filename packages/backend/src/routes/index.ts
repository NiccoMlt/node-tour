import express from 'express'

const router = express.Router()

/* GET home page. */
router.get('/', (_, res) => res.render('index', { title: 'Express' }))

// module.exports = router

/**
 * Index router.
 */
export default router
