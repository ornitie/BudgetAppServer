import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('bill_type', (table) => {
    table.increments('id').primary();
    table.string('name');
  });

  await knex.schema.alterTable('bill', (table) => {
    table
      .integer('type')
      .references('id')
      .inTable('bill_type')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('bill_type');

  await knex.schema.alterTable('bill', (table) => {
    table.dropForeign('type');
    table.dropColumn('type');
  });
}