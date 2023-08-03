import { Request, Response } from 'express';
import { Bill } from './bill';
import * as BillRepository from './billRepository';


export const createBill = async (req: Request, res: Response): Promise<void> => {
    const bill: Bill = req.body;

    BillRepository.insertBill(bill).then(([id]) => {
        res.status(200).json(id);
    }).catch((error) => {
        res.status(500).json({ error }) 
    });
};

export const deleteBill = async (req: Request, res: Response): Promise<void> => {
    const billId: string = req.params.id;

    BillRepository.deleteBill(billId).then(([ id ]) => {
        res.status(200).json(id);
    }).catch((error) => {
        res.status(500).json({ error }) 
    });
};