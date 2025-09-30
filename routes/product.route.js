const productController = require("../controllers/product.controller");
const { Router } = require("express");

const router = Router();

router.param("id", (req, res, next, value) => {
    if (!/^[0-9]+$/.test(value))
        return res.status(400).json({ error: "Param id must be numeric!" });
    next();
});

router.get("/", productController.findAll);
router.get("/:id", productController.findOne);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

module.exports = router;
