import bcrypt from "bcrypt"

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePassword = async (password, passwordHash) =>
  await bcrypt.compare(password, passwordHash);

export { hashPassword, comparePassword };
