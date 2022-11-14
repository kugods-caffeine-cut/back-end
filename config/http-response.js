class httpResponse {
  static SUCCESS_OK(res, message, data) {
    const response = {
      status: "200",
      message: message || "swagger-jsdoc",
      data: data || {},
    };
    console.log(response);
    res.json(response);
  }
  static SUCCESS_CREATED(res, message, data) {
    response = {
      status: "201",
      message: message || "SUCCESS_CREATED",
      data: data || {},
    };
    res.json(response);
  }
  static NOT_FOUND(res, message, data) {
    response = {
      status: "404",
      message: message || "CLIENT_ERROR_NOT_FOUND",
      data: data || {},
    };
    res.json(response);
  }
  static BAD_REQUEST(res, message, data) {
    const response = {
      status: "400",
      message: message || "CLIENT_ERROR_BAD_REQUEST",
      data: data || {},
    };
    console.log(response);

    res.json(response);
  }
  static INTERNAL_ERROR(res, message, data) {
    response = {
      status: "500",
      message: message || "INTERNAL_ERROR",
      data: data || {},
    };
    res.json(response);
  }
}

module.exports = {httpResponse};
