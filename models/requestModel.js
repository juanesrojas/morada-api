
const moongoose = require("mongoose");
const {Schema} = moongoose;


const RequestSchema = new Schema(
    {
        userId:{
            user:Schema.Types.ObjectId,
            ref:'users'
        },
        propertyId:{
            user:Schema.Types.ObjectId,
            ref:'properties'
        },    
        comment:String,   
    },
    {timestamps: true}
);

const Request = moongoose.model("requests",RequestSchema);

module.exports = Request;