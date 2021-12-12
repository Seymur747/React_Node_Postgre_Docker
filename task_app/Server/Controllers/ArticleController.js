const db=require('./../db');

 class ArticleController{
    async GetAll(req,res){
        let list=await db.SelectAll();
        res.send(JSON.stringify(list))
    }
    async GetById(req,res){
        let id= req.params.id
        let result= await db.SelectById(id);
        if(result.length!=0){
            res.send(JSON.stringify(result))
        }
        else{
            res.status(400).send('Not found')
        }
    }

   async  Create(req,res){
       let heading=req.body.heading
       let contetns=req.body.contetns;
       let data= await  db.Insert(heading,contetns);
        res.status(200).send(JSON.stringify(data));
    }
  async  DeleteById(req,res){
        let id=req.params.id;
        let data= await db.Delete(id);
        res.status(200).send(JSON.stringify('Deleted'))
    }
   async Edit(req,res){
        let id=req.params.id;
        let heading=req.body.heading;
        let contetns=req.body.contetns;
        let result=await db.Update(id,heading,contetns);
        res.status(200).send(JSON.stringify('Edit'))
    }
   
}

let controller=new ArticleController();
module.exports=controller;