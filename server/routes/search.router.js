const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.post('/', (req, res) => {
   console.log(req.body)

res.send(req.body)
    res.sendStatus(200);
  });
  



module.exports = router 