const apiLogRouter = require("express").Router();
const apiLogController = require("../controllers/apiLogController");

apiLogRouter.get("/", apiLogController.getAllLogs);
apiLogRouter.get("/:logId", apiLogController.getOneLog);
apiLogRouter.post("/", apiLogController.postLog);

module.exports = {apiLogRouter};
