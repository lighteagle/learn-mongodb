var express = require("express");
var router = express.Router();

const {
  addUser,
  updateUser,
  deleteUserById,
  getUser,
  getUserById
} = require("./controllers");

/* GET users listing. */
router.post("/", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);
router.get("/", getUser);
router.get("/:id", getUserById);

module.exports = router;
