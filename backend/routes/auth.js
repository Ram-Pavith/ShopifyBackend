import router from "express"
import {
  createAccount,
  loginUser,
  googleLogin,
  forgotPassword,
  verifyResetToken,
  resetPassword,
  refreshToken,
} from "../controllers/auth.controller.js"

router.Router()

router.post("/signup", createAccount);

router.post("/login", loginUser);

router.post("/google", googleLogin);

router.post("/forgot-password", forgotPassword);

// token for reset password
router.post("/check-token", verifyResetToken);

router.post("/reset-password", resetPassword);

router.post("/refresh-token", refreshToken);

export default router
