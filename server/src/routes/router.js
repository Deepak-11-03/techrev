const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/insertCustomer", controller.createCustomer);
router.get("/selectCustomers" , controller.getAllCustomers)
router.delete('/deleteCustomer/:id',controller.delete)
module.exports = router;
