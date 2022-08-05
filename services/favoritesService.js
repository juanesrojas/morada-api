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

        const checkFavorites1 = await FavoriteModel.find({userId:userId});

        if(checkFavorites1){
            console.log(`por aqui voy`);
            const checkFavorites = await FavoriteModel.aggregate([
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
                  {
                    $lookup: {
                      from: "businessType",
                      localField: "property.businessType", // favorites
                      foreignField: "id", // property
                      as: "property.businessType",
                    },
                  },
                  {
                    $unwind: "$property.businessType",
                  },
                  {
                    $lookup: {
                      from: "propertyType",
                      localField: "property.propertyType", // favorites
                      foreignField: "id", // property
                      as: "property.propertyType",
                    },
                  },
                  {
                    $unwind: "$property.propertyType",
                  },
    
                  {
                    $lookup: {
                      from: "cities",
                      localField: "property.city", // favorites
                      foreignField: "id", // property
                      as: "property.city1",
                    },
                  },
                  {
                    $unwind: "$property.city1",
                  },
                  
                  {$project:{"cityName":"$property.city1.name","zoneName": {$arrayElemAt: [ "$property.city1.zones", "$property.zone" ]},"title":"$property.title", "city":"$property.city","zone":"$property.zone", "description":"$property.description", "ownerId":"$property.ownerId","propertyType":"$property.propertyType", "businessType":"$property.businessType", "mainImage":"$property.mainImage", "value":"$property.value","_id":"$property._id"}}
            ]);


            console.log(`Propiedades favoritas encontradas`);
            console.log('favoritesByUser',checkFavorites);

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


