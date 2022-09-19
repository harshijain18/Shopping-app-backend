const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const URL ='mongodb+srv://deepanshu_y4246:Anything2_@supplimentsshop.ohclpjg.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(URL, { maxPoolSize: 5 }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Db connection established");
  }
});
module.exports = mongoose;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user" , require("./routes/user.route"))
app.use("/api/product/", require("./routes/product.route"));
app.use("/api/cart" , require("./routes/cart.route"))

app.listen(process.env.PORT || 5000, () => {
  console.log("connection done on 5000");
});
