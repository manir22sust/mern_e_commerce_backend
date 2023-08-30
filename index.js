require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const productsRouter = require("./routes/routeProducts");
const brandsRouter = require("./routes/routeBrands");
const categoriesRouter = require("./routes/routeCategories");
const usersRouter = require("./routes/routeUser");
const authRouter = require("./routes/routeAuth");
const cartRouter = require("./routes/routeCart");
const ordersRouter = require("./routes/routeOrder");

//express app
const app = express();

// middleware
app.use(cors({ exposedHeaders: ["X-Total-Count"] }));
app.use(express.json()); // to parse req.body

app.use("/products", productsRouter.router);
app.use("/brands", brandsRouter.router);
app.use("/categories", categoriesRouter.router);
app.use("/users", usersRouter.router);
app.use("/auth", authRouter.router);
app.use("/cart", cartRouter.router);
app.use("/orders", ordersRouter.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("database connected");
}

app.listen(process.env.PORT, () => {
  console.log(" connected to db && Listening on port ", process.env.PORT);
});
