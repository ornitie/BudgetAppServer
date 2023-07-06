import express from "express";

const router = express.Router();

router.get("/heartbeat", (req: any, res: any) => {
    res.send('Pong');
});


export default router;