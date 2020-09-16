const router = require("express").Router();
const tenantsController = require("../../controllers/tenantsController");

// Matches with "/api/tenants"
router.route("/")
  .get(tenantsController.findAll)
  .post(tenantsController.create);

// Matches with "/api/tenants/:id"
router
  .route("/:id")
  .get(tenantsController.findById)
  .put(tenantsController.update)
  .delete(tenantsController.remove);

module.exports = router;
