import { Bill } from "./bill";

const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig.development);

type billQueryParams = Partial<Bill>;

export const insertBill = async (bill: Bill) => {
    return knex('bill')
      .insert(bill)
      .returning('id');
}

export const deleteBill = async (id: string) => {
  return knex('bill')
    .where('id', id)
    .del()
    .returning('id');
}

export const updateBill = async (bill: Bill) => {
  return knex('bill')
    .where('id', bill.id)
    .update(bill)
    .returning('id');
}

export const getBill = async (billQueryParams: billQueryParams) => {
  return knex.select()
    .from('bill')
    .where({
      ...billQueryParams,
    });
}