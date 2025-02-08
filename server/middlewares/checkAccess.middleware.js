import { validateSessionToken } from "../lib/auth.js";

export async function checkAccess(req, res, next) {
  const token = req.cookies.session;
  if (!token) {
    return res.json({ message: "Access Denied" });
  }
  const { session, user } = await validateSessionToken(token);
  if (!session) {
    return res.json({ message: "Access Denied Sign In Again" });
  }
  res.locals.session = session;
  res.locals.user = user;

  if (user.role !== "admin") {
    return res.json({ message: "Access Denied" });
  }

  next();
}
