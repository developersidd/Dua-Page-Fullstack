const db = require("../../connectDb");

const getDuas = (req, res, next) => {
  const sql = "select * from dua";
  const params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error("Error retrieving duas:", err.message);
      res.status(500).json({ error: "Error retrieving duas." });
      return;
    }
    res.status(200).json({
      success: true,
      message: "Duas retrieved successfully.",
      data: rows,
    });
  });
};

module.exports = { getDuas };
