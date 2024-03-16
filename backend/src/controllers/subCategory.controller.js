import db from "../db/connectDb.js";

const getSubCategories = (req, res, next) => {
  const sql = "select * from sub_category";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Sub Categories retrieved successfully.",
      data: rows,
    });
  });
};

export { getSubCategories };
