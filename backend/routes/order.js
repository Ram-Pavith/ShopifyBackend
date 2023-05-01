import router from "express"
import {
  getOrder,
  getAllOrders,
  createOrder,
} from "../controllers/orders.controller.js"
import verifyToken from "../middleware/verifyToken.js"

router.Router()

router.route("/create").post(verifyToken, createOrder);

router.route("/").get(verifyToken, getAllOrders);

router.route("/:id").get(verifyToken, getOrder);

export default router;
