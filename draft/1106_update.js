//Step One: Transfer user selection into the input format
//TODO: Need to transfer user's selctions into product category ID


//Step Two: Query Input & get OutputSummary


//each each product category id, find corresponding results in each store
//shall we use unwind!??
for (i in length(products)){
    db.StoreProducts.aggregate([
        { 
            $match:
            {
              productCategoryId: products[i].productCategoryId,
              ageGroup: products[i].ageGroup,
              skilllevel: products[i].skilllevel
            }
        },
        { 
            $project:
            {
              storeId: 1,
              productCategoryId: 1,
              prices: 1,
              nDayFree: 1,
              fees: 1,
              _id: 0
            }
        },
        { 
            $out:
            {
              $concat: [ "searchResult", i ]
            }
        }
    ])
};

//return the stores that have all the search results
for (i in length(products)){
  db.Store.aggregate([
       { 
            $addFields: 
            { 
                "rentalLength": "dateRange",
                "userLocation": "location"
            } 
        },
        {
            $lookup: 
            {
              from: {$concat: [ "searchResult", i ]},
              localField: "_id",
              foreignField: "storeId",
              as: "storeProductMatch"
            }
        },
        {
            $match: 
            {
              "sstoreProductMatch.0": {$exists:true}
            }
        },
        { //need to add a condition to only output valid stores
            $project: 
            {
                email: 0,
                website: 0
            }
        }
    ]
)
}
