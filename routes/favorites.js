
const express = require('express');
const router = express.Router();
const authVerify = require('../middleware/authVerify');
const {addFavorite,showFavorites,removeFavorite} = require('../controllers/favoritesCtrl');


router.post('/',authVerify,addFavorite);
router.get('/',authVerify, showFavorites);
router.delete('/',authVerify, removeFavorite);


module.exports = router;


