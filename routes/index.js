const router = require("express").Router();

router.use("/cakes", require("./cakes"));
router.use("/orders", require("./orders"));

module.exports = router;