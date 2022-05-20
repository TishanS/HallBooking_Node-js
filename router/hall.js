const express = require('express');
const router=express.Router();

const getModule=require('../module/hall');

router.get('/get',getModule.getBook);

router.post('/create',getModule.createBook);

//router.put('/update/:Id',getModule.updateBook);

//router.delete('/remove/:Id',getModule.deleteBook);

router.post('/roomCreate',getModule.createRoom);

router.post('/BookedData',getModule.createBookedData);

router.get('/listOfBookedRooms',getModule.createBookedRoomList);

router.post('/customersBookingList',getModule.createBookedCustomer);

module.exports = router;


