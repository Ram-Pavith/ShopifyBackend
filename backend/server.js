const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")
const routes = require("./routes")
const helmet = require("helmet")
const compression = require("compression")
const unknownEndpoint = require("./middleware/unKnownEndpoint")
const { handleError } = require("./helpers/error")
const PORT = 5004

const app = express()

dotenv.config()

app.set("trust proxy", 1);
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use("/api", routes);
app.use(unknownEndpoint);
app.use(handleError);

app.get("/", (req, res) =>
  res.send("<h1 style='text-align: center'>E-COMMERCE API</h1>")
);

app.get('/api/products',(req,res)=>{
  res.json(products)
})

app.get('/api/products/:id',(req,res)=>{
  const product = products.filter((p)=>p.brand === req.params.id)
  res.json(product)
})


app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
