const userData = [];
export const register = (req, res) => {
  const { name, email, password } = req.body ?? {};

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "name, email, and password are required" });
  }

  const user = { name, email, password };
  userData.push(user);

  return res.status(201).json({ userData });
};
