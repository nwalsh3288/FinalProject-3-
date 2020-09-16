const router = require("express").Router();
const tenantRoutes = require("./tenants");

// tenant routes
router.use("/tenants", tenantRoutes);

module.exports = router;
