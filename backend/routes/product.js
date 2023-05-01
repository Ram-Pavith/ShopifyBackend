import router from "express"
import {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
  getProductReviews,
  createProductReview,
  updateProductReview,
} from "../controllers/products.controller.js"
import verifyAdmin from "../middleware/verifyAdmin.js"
import verifyToken from "../middleware/verifyToken.js"

router.Router()

router
  .route("/")
  .get(getAllProducts)
  .post(verifyToken, verifyAdmin, createProduct);

router
  .route("/:id")
  .get(getProduct)
  .get(getProductByName)
  .put(verifyToken, verifyAdmin, updateProduct)
  .delete(verifyToken, verifyAdmin, deleteProduct);

router
  .route("/:id/reviews")
  .get(getProductReviews)
  .post(verifyToken, createProductReview)
  .put(verifyToken, updateProductReview);

export default router;
