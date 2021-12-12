var express = require('express');
var router = express.Router();
const controller=require('./../Controllers/ArticleController')


  router.get('/:id',controller.GetById)
  router.delete('/:id',controller.DeleteById)
  router.put('/:id',controller.Edit)
  router.post('/',controller.Create)
  module.exports = router;