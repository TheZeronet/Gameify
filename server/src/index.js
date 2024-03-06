require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// const connect = require("./config/db");

const productRouter = require("./features/products/product.router");
const cartRouter = require("./features/cart/cart.router");
const userRouter = require("./features/user/user.router");
const planRouter = require("./features/Plans/plans.router");
const paymentRouter = require("./features/payment/payment.router");

const PORT = process.env.PORT || 8080;

const mongoose = require("mongoose");
const connect = async () => {
  mongoose.set("strictQuery", false);
  console.log("Connected to DB");
  return mongoose.connect(process.env.DB_URL);
};

// Deafult Midllewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/user", userRouter);
app.use("/plan", planRouter);

app.use("/payment", paymentRouter);

const gameSchema = new mongoose.Schema({}, { collection: "games" });
const accessorySchema = new mongoose.Schema({}, { collection: "accessories" });

const Game = mongoose.model("Game", gameSchema);
const Accessory = mongoose.model("Accessory", accessorySchema);

app.get("/games", async (req, res) => {
  try {
    let query = {};

    // Filter by category
    if (req.query.category) {
      query.category = req.query.category;
    }

    // Filter by price range
    if (req.query.priceRange) {
      if (req.query.priceRange === "3000+") {
        query.price = { $gt: 3000 };
      } else {
        query.price = { $lt: req.query.priceRange };
      }
    }

    console.log(query);

    let game = await Game.find(query);
    console.log(game);

    // line 61 should be better

    res.json(game);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/accessories", async (req, res) => {
  try {
    const accessories = await Accessory.find();
    res.json(accessories);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/", async (req, res) => {
  res.status(200).send("BASE PAGE");
});

app.listen(PORT, async () => {
  await connect();
  console.log("listen on 8080");
});
