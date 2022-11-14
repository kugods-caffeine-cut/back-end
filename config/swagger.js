const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "카페인 어디까지 먹었니? Caffeine-Cut API",
      description:
        "`카페인 어디까지 먹었니` 프로젝트 API 문서입니다.  기본 URL : [http://ec2-52-78-225-87.ap-northeast-2.compute.amazonaws.com](http://ec2-52-78-225-87.ap-northeast-2.compute.amazonaws.com). ",
    },
    servers: [
      {
        url: "http://ec2-52-78-225-87.ap-northeast-2.compute.amazonaws.com", // 요청 URL
      },
      {
        url: "http://localhost:8000",
      },
    ],
    tags: [
      {
        name: "drink",
        description: "Operations about drinks",
      },
    ],
  },
  apis: ["./config/*.yaml"], //Swagger 파일 연동
};

const specs = swaggerJsdoc(options);

module.exports = {swaggerUi, specs};
