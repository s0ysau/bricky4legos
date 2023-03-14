const express = require('express')
const router = express.Router()
const { dataCtrl, apiCtrl } = require('../../controllers/profile')

// index 
router.get('/', dataCtrl.index, apiCtrl.index)
// delete
router.delete('/:id', dataCtrl.delete, apiCtrl.show) 
// update
router.put('/;id', dataCtrl.update, apiCtrl.show)
// create
router.post('/', dataCtrl.create, apiCtrl.show)
// show 
router.get('/:id', dataCtrl.show, apiCtrl.show)


module.exports = router