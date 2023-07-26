import { Request, Response } from 'express';
import { Bill } from './bill';
import { insertBill } from './billRepository';


export const createBill = async (req: Request, res: Response): Promise<void> => {
    console.log(req.body)
    const bill: Bill = req.body;
    const response = await insertBill(bill);

    res.status(200).json(response);
};