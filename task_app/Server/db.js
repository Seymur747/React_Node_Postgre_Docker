const knex=require('./../Knex/knex')

class DataBase{

   async SelectAll(){
      let result= await knex.select('*').from('articles').orderBy('id','asc')
     return result
    }
   async SelectById(id){
    let result= await knex.select('*').from('articles').where({id:id})
    return result;
    }
  async  Insert(heading,contetns){
        let result= await knex('articles').insert({heading,contetns:contetns}).returning('id')
        return result
    }
    async Delete(id){
      let result= await knex('articles').where({ id: id }).del()
      return result
    }

   async Update(id,heading,contetns){
    let result= await knex('articles').where({ id: id }).
    update({ updated_at: knex.fn.now(),heading:heading,contetns:contetns })
    return result
   }
}
let db=new DataBase();
module.exports=db;