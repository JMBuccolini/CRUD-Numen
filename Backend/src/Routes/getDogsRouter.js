const {Router} = require('express');
const getDogsController= require('../controllers/getDogsController')
const getDogsRouter = Router();

getDogsRouter.get('/',getDogsController.getDB)


module.exports = getDogsRouter;