const jwt = require('jsonwebtoken');

const authVerify = (req,res,next) =>{

    //el string que llega es Bearer xxxxxxxxyyyyyzzzzzww...
    if(req.headers.authorization && req.headers.authorization.split(' ')[0]==='Bearer'){
        const token = req.headers.authorization.split(' ')[1];
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decoded);
            req.payload=decoded;
           
        } catch {
            return res.status(401).send('No autorizado');
        }

    } else {
        return res.status(400).send('Token is mandatory');
    }
    next();
};

module.exports= authVerify;