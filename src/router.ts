import express, { Router } from "express";
import { createBill } from "./bill/billController";

const router: Router = express.Router();

router.get("/heartbeat", (req: any, res: any) => {
    res.send('Pong');
});

router.post("/bill", createBill);

export default router;