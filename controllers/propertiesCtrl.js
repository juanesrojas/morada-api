
const {properties, property, createProperty} = require('../services/propertiesService');


const showProperties = async (req,res) =>{
    try{
        const filter = req.query;


        const {statusHttp,response} = await properties(filter);
        res.status(statusHttp).json(response);

    } catch(error){
        res.status(500).send(error);
    }

};


const showProperty = async (req, res) =>{
    try{
        const propertyId = req.params.propertyId; //debe ser por URL, no por query
        const {statusHttp,response} = await property(propertyId);
        res.status(statusHttp).json(response);
    } catch (error){//si no se resuelve la excepción , la petición sigue en cola en el servidor, importante que siempre resolvamos las solicitudes
        res.status(500).send(error);            

    }

}

const newProperty = async (req, res) =>{
    try{
        const property = req.body;
        const {statusHttp,response} = await createProperty(property);
        res.status(statusHttp).json(response);

    } catch (error){//si no se resuelve la excepción , la petición sigue en cola en el servidor, importante que siempre resolvamos las solicitudes
        res.status(500).send(error);            

    }

}


module.exports = {
    showProperties,
    showProperty,
    newProperty
}