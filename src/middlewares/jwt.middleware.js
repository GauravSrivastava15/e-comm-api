import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // 1 Read the token
  const token = req.headers["authorization"];

  // 2 if no token, return error
  if (!token) {
    res.status(401).send("Unautorized");
  }

  // 3 check if token is valid
  try {
    const payload = jwt.verify(token, "tcy0QA7Qpt");
    req.userId = payload.userId;
    console.log(payload);
  } catch (error) {
    // 4 return error
    return res.status(401).send("Unauthorized");
  }

  // 5 call next middleware
  next();
};

export default jwtAuth;
