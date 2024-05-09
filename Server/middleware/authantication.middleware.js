import jwt, { decode } from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log("Error occur at verifying the token : ", err);
        res.redirect("/api/login");
      } else {
        next();
      }
    });
  } else {
    res.redirect("/api/login");
  }
};

export { requireAuth };
