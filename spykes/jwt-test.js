const jwt = require('jsonwebtoken');

// Generar el Token
const secret = "millavesecreta";


const payload = {
    nombre: 'Juan',
    id: 123456,
    perfil: 'administrador'
};

const token = jwt.sign(payload, secret,{expiresIn:'1m'});

console.log(token);

// decodificar el Token

const decodedPayload = jwt.verify(token,secret);
console.log(decodedPayload);
