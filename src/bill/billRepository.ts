import { Bill } from "./bill";

const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig.development);

export const insertBill = async (bill: Bill) => {
    return knex('bill')
      .insert(bill)
      .catch((error: any) => {
        console.error(error);
      });
}