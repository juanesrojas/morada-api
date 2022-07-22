const {Favorite:FavoriteModel,validateObjectId} = require('./../models/favoriteModel');
const PropertyModel = require('./../models/propertyModel');
const moongoose = require("mongoose");
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const {ObjectId} = moongoose.Types;

const newFavorite = async (propertyId, userId) =>{
    try{

        console.log('validando existencia de propiedad...');

        if(validateObjectId(propertyId)){


            const property= await PropertyModel.findById(propertyId);
            if (property){
                console.log('propiedad encontrada');

                console.log('validando no duplicidad...');
                if (await FavoriteModel.findOne({userId:userId,propertyId:propertyId})){
                    console.log('la propiedad ya existe como favorita del usuario');
                    return responseError (400,"la propiedad ya existe como favorita del usuario"); 
                }
                //añadir a la BD los datos de la propiedad favorita
                const favorite = new FavoriteModel({userId:userId,propertyId:propertyId});
                await favorite.save();//este proceso es asincrónico. hay que volverlo sincrónico, esto se hace con el async / await
                console.log(`Propiedad ${propertyId} agregada como favorita a la cuenta del usuario ${userId}`);
        
                return responseOk ({mensaje:`Favorito Agregado`});       
            }
            return responseError (400,"la propiedad no existe");
        }
        return responseError(500,"invalid property ObjectId"); 
        
    }catch(error){

        return responseError(500,"server error");        
    }

    
};



const favorites = async (userId) =>{
    try{

        const checkFavorites = await FavoriteModel.find({userId:userId});

        if(checkFavorites){
            console.log(`por aqui voy`);
            const favoritesByUser = await FavoriteModel.aggregate([
                {
                    $match:{
                        userId : ObjectId(userId)
                    }
                },
                {
                    $lookup: {
                      from: "properties",
                      localField: "propertyId", // favorites
                      foreignField: "_id", // property
                      as: "property",
                    },
                  },
                  {
                    $unwind: "$property",
                  },
                  {
                    $project: {
                      property: "$property",
                    },
                  },
    
            ]);


            console.log(`Propiedades favoritas encontradas`);
            console.log('favoritesByUser',favoritesByUser);

            return responseOk ({mensaje:`mostrando las propiedades vavoritas del usuario ${userId}`,checkFavorites});    
        }
        return responseError (400,"No favorite properties added");       

    }catch(error){
        return responseError(500,"server error");
    }
};


const deleteFavorite = async (favoriteId,userId) =>{
    try{

        console.log('validando favorito...');


        if(validateObjectId(favoriteId)){
            
            const {deletedCount} = await FavoriteModel.deleteOne({_id:moongoose.Types.ObjectId(favoriteId),userId:moongoose.Types.ObjectId(userId)});
            if(deletedCount){
                console.log(`Favorito ${favoriteId} remmovido del usuario ${userId}`);
                return responseOk ({mensaje:`Favorito removido`});
            }
            return responseError (400,"accion inválida");
           
        }
        return responseError(500,"invalid property ObjectId"); 
        
    }catch(error){
        console.log(error);        
        return responseError(500,"server error");        
    }
};


module.exports = {
    newFavorite,
    favorites,
    deleteFavorite
}


