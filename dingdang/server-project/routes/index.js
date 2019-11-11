var express = require('express');
var router = express.Router();
const { find, insert } = require('../db/db')
/* GET home page. */
router.get('/grids', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('grid');
  res.json(data);
});

router.get('/grids2', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('grid2');
  res.json(data);
});

router.get('/data', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('detail');
  res.json(data);
});

router.get('/goods', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('detail', {
    gid: req.query.id
  });
  res.json(data);
});

router.get('/usermeg', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await insert('userTab', [{
    username: req.query.username,
    password: req.query.password
  }]);
  res.json(data);
});

router.get('/loginmeg', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let data = await find('userTab', {
    username: req.query.username,
    password: req.query.password
  });
  res.json(data);
});

module.exports = router;
