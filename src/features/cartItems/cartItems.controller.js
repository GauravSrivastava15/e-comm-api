import CartItemsModel from "./cartItems.model.js";
export default class CartItemsController{
    add(req, res){
        const {productId, quantity} = req.query;
        const userId = req.userId;
        const result = CartItemsModel.add(productId, userId, quantity)
        if(result.status){
            res.status(201).json({"success": true, "cart": result.res})
        }else{
            res.status(400).json({ success: false, msg: result.res })
        }

    }

    get(req,res){
        const userId = req.userId;
        const items = CartItemsModel.get(userId)
        return res.status(200).send(items)
    }

    delete(req,res){
        const userId = req.userId;
        const cartItemId = req.params.id;
        const error = CartItemsModel.delete(cartItemId, userId)
        if(error){
            res.status(404).send(error)
        }
        return res.status(200).send('Cart Item is removed')
    }
}