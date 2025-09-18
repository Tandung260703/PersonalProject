const product=[{
    id:3,
    namepd:"Noodle",
    price:"4K",
    Qty:3
}]
const checkExist=(req,res)=>{
    const id=req.params.id
    const exist=product.findIndex(pd=>pd.id==id)
    return exist
}

const getAllProduct=(req,res)=>{
    if(product.length>0){
        return res.status(200).json({dataProduct:product})
    }else{
        return res.status(409).json({alert:"Can't find any product"})
    }
}
const getOneProduct=(req,res)=>{
    const exist=checkExist(req,res)
    if(exist!==-1){
        return res.status(200).json({getProduct:product[checkExist]})
    }else{
        return res.status(409).json({alert:"Can't find that product, check your id product"})
    }
}
const postTheProduct=(req,res)=>{
    const exist=checkExist(req,res)
    if(exist!=-1){
        return res.status(409).json({alert:"Product already have exist"}) 
    }else{
        const id=req.params.id
        const namepd=req.body.namepd
        const price=req.body.price
        const Qty=req.body.Qty
        const newPd={id:id,namepd:namepd,price:price,Qty:Qty}
        product.push(newPd)
        return res.status(200).json({postDataPd:product})
    }
}
const putTheProduct=(req,res)=>{
    const exist=checkExist(req,res)
    if(exist==-1){
        return res.status(409).json({alert:"Don't Exist any product"})
    }else{
        const id=req.params.id
        const namepd=req.body.namepd
        const price=req.body.price
        const Qty=req.body.Qty
        const newPd={id:id,namepd:namepd,price:price,Qty:Qty}
        const keys=Object.entries(newPd)
        const blank= keys.find(key=>(key[1]==""||key[1]==undefined))
        if(blank){
            return res.status(409).json({alert:"May be you forget input any field"})
        }else{
            product[exist]=newPd
            return res.status(200).json({putProduct:product})
        }
    }
}

module.exports={putTheProduct,postTheProduct,getOneProduct,getAllProduct}

