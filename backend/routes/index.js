import router from "express"
import cart from "./cart.js"
import order from "./order.js"
import product from "./product.js"
import users from "./users.js"
import auth from "./auth.js"
import payment from "./payment.js"

router.Router()

router.use("/auth", auth);
router.use("/users", users);
router.use("/products", product);
router.use("/orders", order);
router.use("/cart", cart);
router.use("/payment", payment);

export default router;
