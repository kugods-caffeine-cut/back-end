const {httpResponse} = require("../config/http-response");
const {User} = require("../model/User");
const jwt = require("../lib/jwt");

const AuthController = {
  async signIn(req, res) {
    const {kakaoId} = req.body;

    try {
      const user = await User.findOne({kakaoId: kakaoId, isDeleted: false});

      if (user) {
        const token = jwt.sign(user);
        return httpResponse.SUCCESS_OK(res, "", token);
      }

      return httpResponse.UNAUTHORIZED(res);
    } catch (e) {
      return httpResponse.INTERNAL_ERROR(res, "", e);
    }
  },
  async checkToken(req, res, next) {
    try {
      if (
        req.originalUrl == "/api/auth/signUp" ||
        req.originalUrl == "/api/auth/signIn"
      ) {
        return next();
      } else {
        const token = req.headers.authorization.split("Bearer ")[1];
        const authValid = jwt.verify(token);
        if (authValid.success) {
          return next();
        }
        return httpResponse.UNAUTHORIZED(res, "INVALID ACCESS_TOKEN", {});
      }
    } catch (error) {
      return httpResponse.BAD_REQUEST(res, "", {error});
    }
  },
};

module.exports = AuthController;
