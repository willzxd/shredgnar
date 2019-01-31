//Step One: Transfer user selection into the input format
//TODO: Need to transfer user's selctions into product category ID


//Step Two: Query Input & get OutputSummary


//each each product category id, find corresponding results in each store
//shall we use unwind?!!

var storeMatchAtLeastOne = [];

for (var p in userInputedProducts){
  Products.distinct('storeId', 
    { productCategoryId: p.productCategoryId, 
      ageGroup: p.ageGroup,
      skilllevel: p.skilllevel
    },
    function(err, results) {
      storeMatchAtLeastOne.push(results);
    }
  ); 
}

var storeCheckList = [];

storeMatchAtLeastOne.forEach(function(sL) {
  sL.forEach(function(s) {
    if (storeCheckList.includes(s)){
      storeCheckList.push(s);
    }
  });
});


var storeMatchAll = storeCheckList;

storeCheckList.forEach(function(s){
  storeMatchAtLeastOne.forEach(function(sL){
    if (sL.includes(s) == false){
      var index = storeMatchAll.indexOf(s);
      if(index != -1){
        storeMatchAll.splice(index, 1);
      }
    }  
  });
});


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
