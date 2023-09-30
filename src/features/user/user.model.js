export default class UserModel {
  constructor(name, email, pasword, type, id) {
    this.id = id
    this.name = name;
    this.email = email;
    this.pasword = pasword;
    this.type = type;
  }
  static signUp(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser
  }
  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.pasword == password);
    return user;
  }

  static getAll(){
    return users
  }
}



let users = [
  {
    id: 1,
    name: "Seller User",
    email: "seller@ecom.com",
    pasword: "Password",
    type: "seller",
  },
  {
    id: 2,
    name: "Customer User",
    email: "customer@ecom.com",
    pasword: "Password",
    type: "customer",
  },
];
