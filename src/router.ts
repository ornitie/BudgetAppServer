import express from "express";

const router = express.Router();

router.get("/heartbeat", (req, res) => {
    res.send('Pong');
});


export default router;