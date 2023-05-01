import  {
  getAllUsers,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
  getUserProfile,
} from "../controllers/users.controller.js"
import router from "express"
import verifyAdmin from "../middleware/verifyAdmin.js"
import verifyToken from "../middleware/verifyToken.js"

router.Router()

router.use(verifyToken);
router.route("/").get(verifyAdmin, getAllUsers).post(verifyAdmin, createUser);
router.route("/profile").get(getUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
