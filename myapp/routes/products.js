var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', /*aca va el controlador*/ ); //  se va a relacionar con product.ejs 
router.get('/add', /*aca va el controlador*/ ); //  se va a relacionar con productAdd.ejs 
router.get ('/results', /*aca va el controlador*/ ); //  se va a relacionar con searcjResults.ejs 
  
  module.exports = router; 