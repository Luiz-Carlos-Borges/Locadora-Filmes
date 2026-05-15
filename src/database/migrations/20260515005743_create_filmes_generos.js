/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("filmes_generos", (table) =>{
        table.increments("id").primary()

        table.integer("filme_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("filme")
        .onDelete("CASCADE")

        table.integer("generos_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("generos")
        .onDelete("CASCADE")

        table.timestamp(true, true)
        
        
    })
    
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("filmes_generos")
  
};
