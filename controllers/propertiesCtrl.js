


const {
    properties, 
    property, 
    createProperty
} = require('../services/propertiesService');


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
        console.log("response ", response);
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

const uploadImage = (req,res) => {
    if (!req.files){
        res.status(400).send('No files');
    }

    const propertyImage = req.files.propertyImage;

    //donde la vamos a guardar?
    const splittedName = propertyImage.name.split('.');
    const ext = splittedName[splittedName.length-1];
    const newFileName = Math.floor(Date.now())+'.'+ext;
    const path= __dirname + '/../public/'+newFileName;
    
    propertyImage.mv(path,(err)=>{
        if (err){
            return res.status(500).send(err);
        }
        res.json({fileName:newFileName});
        
    })
}

module.exports = {
    showProperties,
    showProperty,
    newProperty,
    uploadImage
}