const router = require("express").Router();
const {
  getOrder,
  getAllOrders,
  createOrder,
} = require("../controllers/orders.controller");
const verifyToken = require("../middleware/verifyToken");

router.route("/create").post(verifyToken, createOrder);

router.route("/").get(verifyToken, getAllOrders);

router.route("/:order_id").get(verifyToken, getOrder);

module.exports = router;
