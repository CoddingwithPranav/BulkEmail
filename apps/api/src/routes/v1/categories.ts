import { Router } from "express";
import * as categoriesCtrl from "../../controllers/categoriesController";
import { protect } from "../../middleware/auth";
import { validate } from "../../middleware/validate";
import { createCategoriesSchema, getCategoriesValidation, updateCategoriesSchema } from "@repo/types";


const router: Router = Router();

router.use(protect);

router.get("/",validate(getCategoriesValidation), categoriesCtrl.getCategories);
router.get("/ddl", categoriesCtrl.getDropDownList); 
router.post("/",validate(createCategoriesSchema), categoriesCtrl.createCategories);
router.get("/:id", categoriesCtrl.getCategoryById);
router.patch("/:id",validate(updateCategoriesSchema), categoriesCtrl.updateCategory);
router.delete("/:id", categoriesCtrl.deleteCategory);

export default router;