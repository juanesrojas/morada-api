const express = require('express');
const router = express.Router();
const {showProperties,showProperty,newProperty} = require('../controllers/propertiesCtrl');


router.get('/',showProperties);
router.get('/:propertyId',showProperty);
router.post('/',newProperty);

module.exports = router;

