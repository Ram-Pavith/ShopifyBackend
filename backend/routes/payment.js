import { makePayment } from "../controllers/payment.controller.js"

import router from "express"

router.Router()

router.route("/").post(makePayment);

export default router;
