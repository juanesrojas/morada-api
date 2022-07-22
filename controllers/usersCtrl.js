const {auth, register, info} = require('../services/userService');


const login = async (req,res) =>{
    try{
        const user = req.body;

        const {statusHttp,response} = await auth(user);
        res.status(statusHttp).json(response);

    } catch(error){
        res.status(500).send(error);
    }

};

const getUser = async (req, res) =>{
    try{
        //const {id} = req.query;// equivalente a const id = req.body.id; // debe ser por query ya que el servicio es por un get y no por un post
        const {id} = req.payload;
        const {statusHttp,response} = await info(id);
        res.status(statusHttp).json(response);
    }catch(error){
        res.status(500).send(error);
    }
};


const signup = async (req, res) =>{
    try{
        const user = req.body;
        
        const {statusHttp,response} = await register(user);
        res.status(statusHttp).json(response);
    } catch (error){//si no se resuelve la excepción , la petición sigue en cola en el servidor, importante que siempre resolvamos las solicitudes
        res.status(500).send(error);            

    }

} 

module.exports = {
    login,
    signup, 
    getUser
}