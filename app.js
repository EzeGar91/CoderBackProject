var express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

//Rutas
router.get("/", function (req, res) {
  res.send("Bienvenido a la tienda de peliculas");
});

app.use(router);

// Conexion MongoDB
mongoose.connect("mongodb+srv://EzeGarriga:Arg911809!@ezegcluster.dftxr2r.mongodb.net/?retryWrites=true&w=majority", function (err, res) {
  if (err) {
    console.log("ERROR: connecting to Database. " + err);
  }
  app.listen(27017, function () {
    console.log("Servidor corriendo en http://localhost:27017");
  });
});

