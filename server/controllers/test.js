export const testRouteGetController = (req, res) => {
  if (!res.locals.user) {
    return res.send("Not Logged In");
  }
  return res.json(res.locals.user);
};
