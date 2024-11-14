import product from "../models/product.js";

export const getProducts = async (req, res) => {
    res.status(200).json({
        message:"Todos Produtos"
    })
};


//Criar um novo produto => /api/v1/admin/products
export const newProduct = async (req, res) => {
    const product = await product.create(req.body);

    res.status(200).json({
        product
    });
}