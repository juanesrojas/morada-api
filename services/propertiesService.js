const PropertyModel = require('./../models/propertyModel');
const moongoose = require("mongoose");
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');
const {ObjectId} = moongoose.Types;

const properties = async (filter) =>{
    try{
        const query = filterMapping (filter);
        //console.log("query",query);
        const checkProperties1 = await PropertyModel.find(query);

        const checkProperties = await PropertyModel.aggregate([
            {$match : query},

            {
                $lookup: {
                  from: "businessType",
                  localField: "businessType", // favorites
                  foreignField: "id", // property
                  as: "businessType",
                },
              },
              {
                $unwind: "$businessType",
              },
              {
                $lookup: {
                  from: "propertyType",
                  localField: "propertyType", // favorites
                  foreignField: "id", // property
                  as: "propertyType",
                },
              },
              {
                $unwind: "$propertyType",
              },

              {
                $lookup: {
                  from: "cities",
                  localField: "city", // favorites
                  foreignField: "id", // property
                  as: "city1",
                },
              },
              {
                $unwind: "$city1",
              },

                {$project:{"cityName":"$city1.name","zoneName": {$arrayElemAt: [ "$city1.zones", "$zone" ]},"title":1, "city":1,"zone":1, "description":1, "ownerId":1,"propertyType":1, "businessType":1, "mainImage":1, "value":1}}

            ]);

        console.log(`Propiedades encontradas`);
        console.log(checkProperties);       
        return responseOk ({mensaje:`mostrando las propiedades disponibles según los filtros aplicados`,checkProperties});       
    }catch(error){
        return responseError(500,"server error");        
    }

    
};

const filterMapping = (filter) =>{
    const query = {};
    if(filter.city) query.city = Number(filter.city);
    if(filter.zone) query.zone = Number(filter.zone);
    if(filter.propertyType) query.propertyType = Number(filter.propertyType);
    if(filter.businessType) query.businessType = Number(filter.businessType);
    if(filter.status) query.status = Number(filter.status);
    if(filter.minPrice & filter.maxPrice){
        query.value={'$gte':Number(filter.minPrice),'$lte':Number(filter.maxPrice)}
    }
    return query;
}

const property = async (propertyId) =>{
    try{
        const checkProperty1 = await PropertyModel.findById(propertyId)
                            .populate("ownerId","name email phone")
                            .exec();

        
        const checkProperty = await PropertyModel.aggregate([
            {$match : { _id: ObjectId(propertyId) }},

            {
                $lookup: {
                  from: "businessType",
                  localField: "businessType", // favorites
                  foreignField: "id", // property
                  as: "businessType",
                },
              },
              {
                $unwind: "$businessType",
              },
              {
                $lookup: {
                  from: "propertyType",
                  localField: "propertyType", // favorites
                  foreignField: "id", // property
                  as: "propertyType",
                },
              },
              {
                $unwind: "$propertyType",
              },

              {
                $lookup: {
                  from: "cities",
                  localField: "city", // favorites
                  foreignField: "id", // property
                  as: "city1",
                },
              },
              {
                $unwind: "$city1",
              },

                {$project:{"cityName":"$city1.name","zoneName": {$arrayElemAt: [ "$city1.zones", "$zone" ]},"title":1, "city":1,"zone":1, "description":1, "ownerId":1,"propertyType":1, "businessType":1, "mainImage":1, "value":1}}

            ]);
 

        if(checkProperty){
            console.log(`Propiedad ${propertyId}`);
            console.log(checkProperty);
            const uniqueCheckProperty =checkProperty[0];
            return responseOk ({mensaje:`mostrando la propiedad ${propertyId}`,uniqueCheckProperty}); 
        }
        return responseError(404,"Propiedad no encontrada");
    }catch(error){
        console.log(error);
        return responseError(500,"server error");
    }
};

const createProperty = async(propertyData) =>{
    try{

          delete propertyData['userToken'];
          const property = new PropertyModel(propertyData);
          await property.save();//este proceso es asincrónico. hay que volverlo sincrónico, esto se hace con el async / await
          console.log('Propiedad agregada');
          return responseOk({property});

    }catch (error){
        console.log('error',error);
        return responseError(500,"server error");
    }


};

module.exports = {
        properties,
        property,
        createProperty
}