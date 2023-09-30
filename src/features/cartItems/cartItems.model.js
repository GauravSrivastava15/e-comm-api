import UserModel from "../user/user.model.js";
import ProductModel from "../product/product.model.js";

export default class CartItemsModel {
  constructor(productId, userId, quantity, id) {
    this.productId = productId;
    this.userId = userId;
    this.quantity = quantity;
    this.id = id;
  }

  static add(productID, userId, quantity) {
    const user = UserModel.getAll().find((u) => u.id == userId);
    if (!user) {
      return { staus: false, res: "user not found" };
    }

    const product = ProductModel.getAll().find((p) => p.id == productID);
    if (!product) {
      return { status: false, res: "product not found" };
    }

    const cartItem = new CartItemsModel(productID, userId, quantity);
    cartItem.id = cartItems.length + 1;
    cartItems.push(cartItem);
    return { status: true, res: cartItem };
  }

  static get(userId) {
    return cartItems.filter((i) => i.userId == userId);
  }

  static delete(cartItemId, userId){
    const cartItemIndex = cartItems.findIndex((i) => i.id == cartItemId && i.userId == userId)
    if(!cartItemIndex == -1){
        return "Item not found"
    }else{
        cartItems.splice(cartItemIndex,1);
    }
  }
}

var cartItems = [
  new CartItemsModel(1, 2, 1, 1),
  new CartItemsModel(1, 1, 2, 1),
];
