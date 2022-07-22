const {compare} = require('bcrypt');
const bcrypt = require('bcrypt');
const pass = "xxxx";


const main = async () =>{
    const plainPassword = "hola";
    const match = await bcrypt.compare(plainPassword,pass);


    if (match){
        console.log('match');
    } else {
        console.log('no macth');
    }
}

