const express = require('express');
const knex=require('./../Knex/knex')
const app = express();
const bodyParser = require('body-parser');
const controller=  require('./Controllers/ArticleController')
const bp = require("body-parser");
const port = 3001;
const articleRouter=require('./Routes/ArticleRouter')
var cors = require('cors')
app.use(cors())
app.use(bp.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/article',articleRouter)

app.get('/articles',controller.GetAll)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// knex('articles').where({ id: 4 }).update({ updated_at: knex.fn.now(),heading:'updateHeading',contetns:'testContent' }).then(data=>console.log(data))
