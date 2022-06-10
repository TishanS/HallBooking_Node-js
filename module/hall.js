const mongo=require('../shared');
const {ObjectId}=require('mongodb');

//Read
module.exports.getBook = async (req,res,next)=>{
    try{
        var data = await mongo.selectedDb.collection('hall booking').find().toArray();
        res.send(data);
        
    }catch(err){
        console.log(err)
    }
}

//create booked data
module.exports.createBook = async (req,res,next)=>{
    try{
        var mongoRes = await mongo.selectedDb.collection('hall booking').insert(req.body);
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//update
module.exports.updateBook = async (req,res,next)=>{
    try{
        var mongoRes = await mongo.selectedDb.collection('hall booking').updateOne({_id:ObjectId(req.params.Id)},{$set:{...req.body}});
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//delete
module.exports.deleteBook = async (req,res,next)=>{
    try{
        var mongoRes = await mongo.selectedDb.collection('hall booking').remove({_id:ObjectId(req.params.Id)});
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//create room
module.exports.createRoom = async (req,res,next)=>{
    try{
        var mongoRes = await mongo.selectedDb.collection('createRoom').insert(req.body);
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//create booked data
module.exports.createBookedData = async (req,res,next)=>{
    try{
        var mongoRes = await mongo.selectedDb.collection('BookedData').insert(req.body);
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//create the list of all booking rooms
module.exports.createBookedRoomList = async (req,res,next)=>{
    try{
        var mongoRes = await mongo.selectedDb.collection('BookedData').aggregate([
            {
                $lookup:{
                    from:'hall booking',
                    localField:'roomId',
                    foreignField:'roomId',
                    as:'BookedRoomList'
                },
                
            },
            {
                $unwind: '$BookedRoomList'
              },
              {
                $project:{
                    _id:0,
                    roomName:'$BookedRoomList.roomName',
                    bookedStatus:1,
                    customerName:"$BookedRoomList.customerName",
                    date:"$BookedRoomList.date",
                    startTime:"$BookedRoomList.startTime",
                    endTIme:"$BookedRoomList.endTime"
                }  }
              
        ]).toArray();
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

//create the list of customers booked room
module.exports.createBookedCustomer=async (req,res,next)=>{
    try{
        var mongoRes=await mongo.selectedDb.collection('BookedData').aggregate([
            {
                $lookup:{
                    from:'hall booking',
                    localField:'roomId',
                    foreignField:'roomId',
                    as:'BookedRoomList'
                },
                
            },
            {
                $unwind: '$BookedRoomList'
              },
              {
                $project:{
                    _id:0,
                    roomName:'$BookedRoomList.roomName',
                    customerName:"$BookedRoomList.customerName",
                    date:"$BookedRoomList.date",
                    startTime:"$BookedRoomList.startTime",
                    endTIme:"$BookedRoomList.endTime"
                }  }
              
        ]).toArray();
        res.send(mongoRes);
    }catch(err){
        console.log(err)
    }
}

