const auth = (req, res, next) => {
  console.log("auth wala middleware");
  next();
};
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  next();
};
module.exports = { auth, logger };
