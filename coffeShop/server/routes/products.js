const router=require("express").Router()
const {getOneProduct,getAllProduct,postTheProduct,putTheProduct}=require("../controllers/controllersProduct.js")

router.get('/',getAllProduct)
router.get('/:id',getOneProduct)
router.post('/:id',postTheProduct)
router.put('/:id',putTheProduct)



module.exports=router