const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const exphbs = require("express-handlebars"); // Use exphbs instead of hbs

const route = require("./server/router/router");
const connectDB = require("./server/database/connection");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();

// Use exphbs.engine() instead of hbs()
app.engine(
  "hbs",
  exphbs.engine({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: path.join(__dirname, "views/layouts"),
    defaultLayout: false,
    partialsDir: path.join(__dirname, "views/partials"),
  })
);

app.set("view engine", "hbs");

app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", route);

app.listen(PORT, () => {
  console.log(`App is listening to http://localhost:${PORT}`);
});
