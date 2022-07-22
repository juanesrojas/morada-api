const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('./../models/userModel');
const responseOk = require('../utils/responseOk');
const responseError = require('../utils/responseError');

const auth = async (user) =>{
    try{      
        console.log('validando email...');
            const userFound = await UserModel.findOne({email:user.email});
            console.log('Email encontrado!');
            if (userFound){
                const match = await bcrypt.compare(user.password, userFound.password);
                if (match){
                    const payload = {
                        id: userFound.id,
                        role: userFound.role
                    }
                    const token = jwt.sign(payload, process.env.JWT_SECRET);
                    console.log('password validado');
                    return responseOk ({token,role:userFound.role}); 
                }
                return responseError(401,"usuario o contraseña errados");
            }
            return responseError(401,"usuario o contraseña errados"); 
        } catch (error){
          console.log('error',error);
          return responseError(500,"server error");
        }
};

const info = async (id) =>{
    try{
        const user = await UserModel.findById(id);
        return responseOk({user});
    }catch(error){
        return responseError(500,"server error");
    } 
}


const register = async (userData) =>{
    try{

        if(await validateEmail(userData.email)){
            return responseError(400, 'El usuario ya esta registrado');
        }
        const encryptedPassword = await bcrypt.hash(userData.password, 11);
        userData.password =encryptedPassword;
        const user = new UserModel(userData);
        await user.save();//este proceso es asincrónico. hay que volverlo sincrónico, esto se hace con el async / await
        return responseOk({user});
    }catch (error){
        console.log('error',error);
        return responseError(500,"server error");
    }



};

const validateEmail = async (email) =>{
    try{
        const checkEmail = await UserModel.findOne({email:email});
        console.log('validando email');
        return checkEmail ? true:false;
    } catch (error){
        return responseError(500,"server error");
    }
}


const loginUser = async (email,password) =>{
    try{
        const checkUser = await UserModel.findOne({email:email,password:password});
        console.log('validando password');
        return checkUser; 
    } catch (error){
        return responseError(500,"server error");
    }
}

module.exports = {
        auth,
        register, 
        info
}