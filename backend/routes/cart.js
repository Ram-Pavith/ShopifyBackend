import router from "express"
import verifyToken from "../middleware/verifyToken.js"
import {
  getCart,
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../controllers/cart.controller.js"

router.Router()

router.use(verifyToken);
// get cart items
router.route("/").get(getCart);

// add item to cart
router.route("/add").post(addItem);

// delete item from cart
router.route("/delete").delete(deleteItem);

// increment item quantity
router.route("/increment").put(increaseItemQuantity);

// decrement item quantity
router.route("/decrement").put(decreaseItemQuantity);

export default router
