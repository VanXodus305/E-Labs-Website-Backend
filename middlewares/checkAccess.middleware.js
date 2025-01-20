import { validateSessionToken } from "../lib/auth";

export async function checkAccess(req, res, next) {
  const token = req.cookies.session;
  if (!token) {
    return res.redirect("/sign-in");
  }
  const { session, user } = await validateSessionToken(token);
  if (!session) {
    return res.redirect("/sign-in");
  }
  res.locals.session = session;
  res.locals.user = user;

  if (user.role !== "admin") {
    return res.redirect("/sign-in");
  }

  next();
}
