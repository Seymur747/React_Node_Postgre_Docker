const express = require('express');
const knex=require('./Knex/knex')
const app = express();
const controller=  require('./Controllers/ArticleController')
const bp = require("body-parser");
const port = 3001;
const articleRouter=require('./Routes/ArticleRouter')
var cors = require('cors');
const keys = require('./keys');
const { pgPassword, pgUser, pgDatabase, pgPort } = require('./keys');
app.use(cors())
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use('/article',articleRouter)
app.get('/articles',controller.GetAll)
app.get('/test1',(req,res)=>{
  console.log("isit   "+ keys.pgHOST +'  '+keys.pgUser+' '+keys.pgPassword+' '+keys.pgDatabase+''+keys.pgPort)
  res.send(keys.pgHOST+ ' ' +keys.pgPassword+' '+keys.pgUser+' '+keys.pgDatabase+' '+keys.pgPort)

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

