
const moongoose = require("mongoose");
const {Schema} = moongoose;


const FavoriteSchema = new Schema(
    {
        userId:{
            type:Schema.Types.ObjectId,
            ref:'users'
        },
        propertyId:{
            type:Schema.Types.ObjectId,
            ref:'properties'
        },       
    },
    {timestamps: true}
);

const Favorite = moongoose.model("favorites",FavoriteSchema);

const validateObjectId = (id) =>{
    return moongoose.Types.ObjectId.isValid(id);
}

module.exports = {Favorite,validateObjectId};