const express = require("express");
const controller = require("../controller/controller");
const upload = require("../middleware/multer");

const route = express.Router();

route.get("/", controller.homeController);

route.post(
  "/uploadmultiple",
  upload.array("images", 12),
  controller.uploadController
);

module.exports = route;
