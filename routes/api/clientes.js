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

router.get('/one/:id', async (req, res)=>{
    try{
      let { id } = req.params;
      let oneDocument = await mdbClienteModel.getById(id);
      res.status(200).json(oneDocument);
    } catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  router.post('/new', async (req, res)=>{
    try{
      let {name, email, telefono,producto,pay,status} = req.body;
      var rslt = await mdbClienteModel.addOne({ name, email, telefono,producto,pay,status}); // {sku: sku, name:name, price:price, stock:0}
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }

  });

  router.put('/upd/:id', async (req, res)=>{
    try{
      let {id} = req.params;
      let {status} = req.body;
      let rslt = await mdbClienteModel.updateById(id,status);
      res.status(200).json(rslt);
    }catch(ex){
      console.log(ex);
      res.status(500).json({ "msg": "Algo Paso Mal." });
    }
  });

  module.exports = router;
