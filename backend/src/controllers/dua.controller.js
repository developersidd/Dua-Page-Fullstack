import db from "../db/connectDb.js";

const getDuas = (req, res, next) => {
  var sql = "select * from dua";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Duas retrieved successfully.",
      data: rows,
    });
  });
};

export { getDuas };
