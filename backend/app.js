require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
app.use(express.json());
app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  // console.log(products);
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product?.card?.info?.name,
      },
      unit_amount:Math.round(product?.card?.info?.price ) || Math.round(product?.card?.info?.defaultPrice )
    },
    quantity: 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:1234/success",
    cancel_url: "http://localhost:1234/cancel",
  });
  res.json({ id: session.id });
});
app.listen(3000, () => {
  console.log("Server Started");
});
