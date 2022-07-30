const express = require('express');
const router = express.Router();
const {
    showProperties,
    showProperty,
    newProperty,
    uploadImage
} = require('../controllers/propertiesCtrl');


router.get('/',showProperties);
router.get('/:propertyId',showProperty);
router.post('/',newProperty);
router.post("/upload",uploadImage);

module.exports = router;

