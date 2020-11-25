const express = require("express");
let router = express.Router();



let ClientModel = require("../../models/cliente/cliente.model")();
const ClientModelClass = require('../../models/cliente/cliente.model');
const mdbClienteModel = new ClienteModelClass();

router.get("/all", async (req, res) => {
  try {
    const rslt = await mdbClienteModel.getAll();
    res.status(200).json(rslt);
  } catch (ex) {
    console.log(ex);
    res.status(500).json({ msg: "Algo Paso Mal." });
  }
});
