require("../connection/mongoconn");
const mongoose = require("mongoose");
const {Favorite:FavoriteModel} = require('./../models/favoriteModel');
const {ObjectId} = mongoose.Types;


const main = async (id) => {
    try {
      const favoritesByUser = await FavoriteModel.aggregate([
            {
                $match:{
                    userId : ObjectId(id)
                }
            },
            {
                $lookup: {
                  from: "properties",
                  localField: "propertyId", // favorites
                  foreignField: "_id", // property
                  as: "property",
                },
              },
              {
                $unwind: "$property",
              },
              {
                $project: {
                  property: "$property",
                },
              },

        ]);

        console.log('favoritesByUser',favoritesByUser);
    } catch (error) {
        console.error('error',error);
    }


};

main("62a4c7a835df801ebcee23ba");

