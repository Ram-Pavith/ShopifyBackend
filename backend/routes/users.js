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

const route = router.Router()

route.use(verifyToken);
route.route("/").get(verifyAdmin, getAllUsers).post(verifyAdmin, createUser);
route.route("/profile").get(getUserProfile);
route.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default route;
