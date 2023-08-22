import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.table('bill', function(table) {
      table.uuid('new_id');
    });
    
   await knex.raw('UPDATE bill SET new_id = id');
    
   await knex.schema.table('bill', function(table) {
      table.dropColumn('id');
    });
    
   await knex.schema.table('bill', function(table) {
      table.renameColumn('new_id', 'id');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.table('bill', function(table) {
      table.uuid('id');
    });
    
   await knex.raw('UPDATE bill SET id = new_id');
    
   await knex.schema.table('bill', function(table) {
      table.dropColumn('new_id');
    });
}
