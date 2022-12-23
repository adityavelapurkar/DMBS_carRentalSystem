use rcs;

show collections;

db.car.find().pretty();

db.subscription.find();

db.insurance.find();

db.insurance.find({Cost: {$gt:100}});

db.carcategory.find();

db.carcategory.find({CostperHr: {$gt:30, $lte:40}});

db.location.find();

db.location.find({city: "New Clark", zipcode: 1526});

db.bill.aggregate([{$match: {payment_type: "cash"}}, {$group: {_id: "$InvoiceID", total:{$sum:"$FinalAmount"}} }]);

db.bill.aggregate([ {$match: {payment_type: "cash"}}, {$group: {_id:null, totalcashrevenue:{$sum:"$FinalAmount"} }} ]);

db.insurance.aggregate([{$group: {
    _id: "$CompanyName",
    total_cost: {$sum: "$Cost"}, total_count: {$count: {}}
}}  ]);


