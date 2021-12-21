


exports.up = function(knex) { 
    return knex.schema.createTable('articles',table=>{
         table.increments('id').primary(),
         table.string('heading',255).defaultTo('Untitled article') 
            
         table.string('contetns',1000).nullable(); table.timestamp('created_at').defaultTo(knex.fn.now()) 
          table.timestamp('updated_at').nullable(); })
         }; 
          
          exports.down = function(knex) {
              
            return knex.schema.dropTable('articles') 
        
        };