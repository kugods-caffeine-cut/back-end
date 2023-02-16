const jwt = require("../lib/jwt");
const {httpResponse} = require("../config/http-response");

const isLoggedIn = (req, res, next) => {
  // TODO - 회원가입 URL의 경우에 바로 next
  const {token} = req.body;

  const decoded = jwt.verify(token);

  if (decoded.success) {
    req.id = decoded.data._id;
    next();
  } else {
    httpResponse.UNAUTHORIZED(res, "", decoded.data);
  }
};

module.exports = {
  isLoggedIn,
};
