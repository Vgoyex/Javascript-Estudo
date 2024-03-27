const express = require("express");
const router = express.Router();
const home = require("./src/controller/home/home");
const testes = require("./src/controller/testes/testes");

router.get("/", home.getHome);

router.post("/", home.postHome);

router.get("/testes/:idUsuario?/:opcional?", testes.getTestes);

router.post("/testes", testes.postTestes);

module.exports = router;
