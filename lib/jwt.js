const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

module.exports = {
  sign(user) {
    const payload = {
      id: user._id,
    };

    return jwt.sign(payload, secret, {
      issuer: "CaffeOut",
    });
  },
  verify(token) {
    try {
      const decoded = jwt.verify(token, secret);

      return {
        success: true,
        data: decoded,
      };
    } catch (e) {
      return {
        success: false,
        data: e,
      };
    }
  },
};
