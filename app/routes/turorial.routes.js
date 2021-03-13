module.exports = app => {
  const appdata = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  debugger;
  // // Create a new Tutorial
  router.post("/", appdata.create);

  // Retrieve all appdata
  router.get("/", appdata.findAll);

  // Retrieve all published appdata
  router.get("/published", appdata.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", appdata.findOne);

  // Update a Tutorial with id
  router.put("/:id", appdata.update);

  // Delete a Tutorial with id
  router.delete("/:id", appdata.delete);

  // // Create a new Tutorial
  // router.delete("/", appdata.deleteAll);

  app.use("/api/appdata", router);
};
