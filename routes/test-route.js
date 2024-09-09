const express = require('express');
const router = express.Router();
const {testRouteGetController} = require('../controllers/test');

router.get('/', testRouteGetController);

module.exports = router;
