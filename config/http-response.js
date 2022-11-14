class httpResponse {
  static SUCCESS_OK(res, message, data) {
    const response = {
      status: "SUCCESS_OK 200",
      message: message || "",
      data: data || {},
    };
    console.log(response);
    res.json(response);
  }
  static SUCCESS_CREATED(res, message, data) {
    response = {
      status: "SUCCESS_CREATED 201",
      message: message || "",
      data: data || {},
    };
    res.json(response);
  }
  static NOT_FOUND(res, message, data) {
    response = {
      status: "CLIENT_ERROR_NOT_FOUND 404",
      message: message || "",
      data: data || {},
    };
    res.json(response);
  }
  static BAD_REQUEST(res, message, data) {
    const response = {
      status: "CLIENT_ERROR_BAD_REQUEST 400",
      message: message || "",
      data: data || {},
    };
    console.log(response);

    res.json(response);
  }
  static INTERNAL_ERROR(res, message, data) {
    response = {
      status: "INTERNAL_ERROR 500",
      message: message || "",
      data: data || {},
    };
    res.json(response);
  }
}

module.exports = {httpResponse};
