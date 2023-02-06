'use strict';

const express = require('express');
const router = express.Router();
const controllers = require('../controllers/ProfileControllers')
const { check } = require('express-validator');

router.get('/:id', controllers.index);
router.post('/profile',check('name').not().isEmpty(),controllers.insert)
module.exports=router



