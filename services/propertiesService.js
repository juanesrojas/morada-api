const PropertyModel = require('./../models/propertyModel');
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const properties = async (filter) =>{
    try{
        const query = filterMapping (filter);
        const checkProperties = await PropertyModel.find(query);
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
        const checkProperty = await PropertyModel.findById(propertyId)
                            .populate("ownerId","name email phone")
                            .exec();

        if(checkProperty){
            console.log(`Propiedad ${propertyId}`);
            console.log(checkProperty);
            return responseOk ({mensaje:`mostrando la propiedad ${propertyId}`,checkProperty}); 
        }
        return responseError(404,"Propiedad no encontrada");
    }catch(error){
        return responseError(500,"server error");
    }
};

const createProperty = async(propertyData) =>{
    try{
        if(propertyData.userToken==='xxxyyyzzzwwwttt'){
            delete propertyData['userToken'];
            const property = new PropertyModel(propertyData);
            await property.save();//este proceso es asincrónico. hay que volverlo sincrónico, esto se hace con el async / await
            console.log('Propiedad agregada');
            return responseOk({property});
            
        }
            return responseError(401," token usuario invalido");   
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