import express from "express";
import swagger, { serve } from "swagger-ui-express";
import productRouter from "./src/features/product/product.routes.js";
import bodyParser from "body-parser";
import userRouter from "./src/features/user/user.routes.js";
import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js";
import jwtAuth from "./src/middlewares/jwt.middleware.js";
import cartRouter from "./src/features/cartItems/cartItems.routes.js";
import apiDocs from "./swagger.json" assert { type: "json" };
import cors from "cors";
import loggerMiddleware from "./src/middlewares/logger.middleware.js";
import { ApplicationError } from "./src/error-handler/applicationError.js";

const app = express();

var corsOptions = {
  origin: "http://localhost:5500/",
  allowedHeaders: "*",
};

app.use(cors());

// app.use(bodyParser.json());

//CORS policy configuration
// app.use((req,res, next) =>{
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5500/')
//   res.header('Access-Control-Allow-Headers', '*')
//   res.header('Access-Control-Allow-Methods', '*')
//   //return ok for preflight request
//   if(req.method=="OPTIONS"){
//     return res.sendStatus(200)
//   }
//   next();
// })

app.use(express.json());
//Bearer <token>
app.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

app.use(loggerMiddleware)
//Default request handler
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce APIs");
});

app.use("/api/products", loggerMiddleware, jwtAuth, productRouter);
app.use("/api/users", userRouter);
app.use("/api/cartItems", jwtAuth, cartRouter);

// Error handler middleware
app.use((err, req, res, next) =>{
  console.log(err)
  if(err instanceof ApplicationError){
    res.status(err.code).send(err.message)
  }
  res.status(500).send("Something went wrong, please try late")
})

//Middleware to handle 404
app.use((req, res) => {
  res.status(404).send("API not found");
});

app.listen(8080, () => {
  console.log("server is running on 8080");
});


