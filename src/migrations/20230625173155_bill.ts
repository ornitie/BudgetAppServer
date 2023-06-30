import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('bill', (table) => {
    table.increments('id').primary();
    table.string('amount');
    table.string('type');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('bill');
}