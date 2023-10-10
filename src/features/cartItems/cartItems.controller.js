import { ApplicationError } from "../../error-handler/applicationError.js";
import CartItemsModel from "./cartItems.model.js";
import CartItemsRepository from "./cartItems.repository.js";
export default class CartItemsController {
  constructor() {
    this.cartItemsRepository = new CartItemsRepository();
  }
  async add(req, res) {
    try {
      const { productID, quantity } = req.body;
      const userID = req.userID;
      console.log(userID);
      await this.cartItemsRepository.add(productID, userID, quantity);
      res.status(201).send("Cart is updated");
    } catch (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    }
  }

  async get(req, res) {
    try {
      const userID = req.userID;
      const items = await this.cartItemsRepository.get(userID);
      return res.status(200).send(items);
    } catch (err) {
      console.log(err);
      res.status(400).send("Something went wrong");
    }
  }

  async delete(req, res) {
    const userID = req.userID;
    const cartItemID = req.params.id;
    const isDeleted = await this.cartItemsRepository.delete(cartItemID, userID);
    if (!isDeleted) {
      res.status(404).send('item not found');
    }
    return res.status(200).send("Cart Item is removed");
  }
}
