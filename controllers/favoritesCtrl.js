
const {newFavorite, favorites,deleteFavorite} = require('../services/favoritesService');


const addFavorite = async (req,res) =>{
    try{
        const {propertyId} = req.body;
        const {id} = req.payload;
        const {statusHttp,response} = await newFavorite(propertyId,id);
        res.status(statusHttp).json(response);

    } catch(error){
        res.status(500).send(error);
    }

};


const showFavorites = async (req, res) =>{
    try{
        const {id} = req.payload;
        const {statusHttp,response} = await favorites(id);
        res.status(statusHttp).json(response);
    } catch (error){//si no se resuelve la excepción , la petición sigue en cola en el servidor, importante que siempre resolvamos las solicitudes
        res.status(500).send(error);            

    }

}

const removeFavorite = async (req, res) =>{
    try{
        const {favoriteId} = req.body;
        const {id} = req.payload;
        const {statusHttp,response} = await deleteFavorite(favoriteId,id);
        res.status(statusHttp).json(response);

    } catch(error){
        console.log(error);
        res.status(500).send(error);
    }

}



module.exports = {
    addFavorite,
    showFavorites,
    removeFavorite
}