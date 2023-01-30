const {httpResponse} = require("../config/http-response");
const {User} = require("../model/User");
const jwt = require("../lib/jwt");

const AuthController = {
  async signIn(req, res) {
    const {id} = req.body;

    try {
      const user = await User.find({_id: id, isDeleted: false});

      if (user) {
        const token = jwt.sign(user);
        return httpResponse.SUCCESS_OK(res, "", token);
      }

      return httpResponse.UNAUTHORIZED(res);
    } catch (e) {
      return httpResponse.INTERNAL_ERROR(res, "", e);
    }
  },
};

module.exports = AuthController;
