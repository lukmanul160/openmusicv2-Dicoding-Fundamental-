const path = require("path");

const routes = (handler) => [
  {
    method: "POST",
    path: "/albums/{id}/covers",
    handler: handler.postUploadImageHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        output: "stream",
        maxBytes: 512000,
      },
    },
  },
  {
    method: "GET",
    path: "/upload/file/images/{param*}",
    handler: {
      directory: {
        path: path.resolve(__dirname, "../uploads/file/images"),
      },
    },
  },
];

module.exports = routes;
