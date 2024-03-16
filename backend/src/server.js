// Dependencies
const express = require("express");
const CategoryRouter = require("./routes/category.route");
const DuaRouter = require("./routes/dua.route");
const SubCategoryRouter = require("./routes/subCategory.route");
const app = express();
// routes

// Root endpoint
app.get("/", (req, res, next) => {
  res.json({ message: `App is Running on port ${HTTP_PORT}` });
});
app.use("/api/v1/categories", CategoryRouter);
app.use("/api/v1/sub_categories", SubCategoryRouter);
app.use("/api/v1/duas", DuaRouter);

// Default response for any other request
app.use(function (req, res) {
  res.status(404);
});

// Server port
const HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
