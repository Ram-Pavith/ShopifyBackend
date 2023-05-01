import { ErrorHandler } from "../helpers/error.js"

const verifyAdmin = (req, res, next)=>{
  const { roles } = req.user;
  if (roles && roles.includes("admin")) {
    req.user = {
      ...req.user,
      roles,
    };
    return next();
  } else {
    throw new ErrorHandler(401, "require admin role");
  }
};
export default verifyAdmin