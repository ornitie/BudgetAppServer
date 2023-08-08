import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('bill', (table) => {
        table.dropColumn('timespan');
    });
    await knex.schema.createTable('timespan', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('type');
    });
    await knex.schema.alterTable('bill', (table) => {
        table
          .integer('timespan')
          .references('id')
          .inTable('timespan')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('bill', (table) => {
        table.dropColumn('timespan');
    });
    await knex.schema.dropTableIfExists('timespan');
}
