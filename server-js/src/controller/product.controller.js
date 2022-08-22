const getProducts =(req,res) =>{
    res.json("Lista de productos")
}

const addProducts =(req,res) =>{
    res.json("Agregando de productos")
}

export const methods = {getProducts, addProducts};