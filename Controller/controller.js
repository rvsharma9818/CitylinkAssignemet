const userModel = require("../Models/user.Model");
const vendorModel = require("../Models/vendor");
const {
  isValid,
  isValidRequestBody,
  isValidObjectId,
  isValidName,
  isValidEmail,
  isValidPhone,
  isValidPincode,
  isValidVehical,
  isValidLattitude,
  isValidLongitude,
  isValidStatus,
} = require("../validators/validators");
const bookingModel = require("../Models/booking.model");

exports.createUser = async (req, res) => {
  try {
    const { userID, fullname, mobile, email } = req.body;

    if (!isValidRequestBody(req.body)) {
      return res.status(400).send({
        status: false,
        message: "Please provide data for creating user...",
      });
    }

    if (!isValid(fullname)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  name..." });
    }

    if (!isValidName(fullname))
      return res
        .status(400)
        .send({ status: false, message: "Please Enter a valid  Name..." });
    if (!isValidPhone(mobile)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide Valid Mobile No..." });
    }

    const isRegisteredphone = await userModel.findOne({ mobile }).lean();

    if (isRegisteredphone) {
      return res.status(400).send({
        status: false,
        message: "phoneNo number already registered...",
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).send({
        status: false,
        message: "Please enter a valid Email ****@gmail.com...",
      });
    }

    const isRegisteredEmail = await userModel.findOne({ email });
    if (isRegisteredEmail) {
      return res
        .status(400)
        .send({ status: false, message: "email id already registered..." });
    }
    let user = Math.floor(Math.random() * 899999 + 100000);
    const userCreated = await userModel.create({
      userID: user,
      fullname,
      mobile,
      email,
    });

    return res
      .status(201)
      .send({ status: true, message: "Success", data: userCreated });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};

exports.vendorcreate = async (req, res) => {
  try {
    if (!isValidRequestBody(req.body)) {
      return res.status(400).send({
        status: false,
        message: "Please provide data for creating user...",
      });
    }
    const { vendorId, driverName, vehicleNumber, vehicleModel } = req.body;
    if (!isValid(driverName)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  name..." });
    }

    if (!isValidName(driverName))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  driverName...",
      });
    if (!isValid(vehicleNumber)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  name..." });
    }

    if (!isValidVehical(vehicleNumber))
      return res.status(400).send({
        status: false,
        message:
          "Please Enter a valid Vehical number... format = KA 03 HA 1985",
      });
    const isvehiclenumber = await vendorModel.findOne({ vehicleNumber });
    if (isvehiclenumber) {
      return res.status(400).send({
        status: false,
        message: "vehicle Number  already registered...",
      });
    }
    if (!isValid(vehicleModel)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  name..." });
    }

    if (!isValidName(vehicleModel))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  Vheicle Name...",
      });
    let vendorid = Math.floor(Math.random() * 899999 + 100000);
    const vendorCreated = await vendorModel.create({
      vendorId: vendorid,
      driverName,
      vehicleNumber,
      vehicleModel,
    });

    return res
      .status(201)
      .send({ status: true, message: "Success", data: vendorCreated });
  } catch (error) {
    return res.status(500).json({ err: error.message });
  }
};
exports.createbooking = async (req, res) => {
  try {
    if (!isValidRequestBody(req.body)) {
      return res.status(400).send({
        status: false,
        message: "Please provide data for ...",
      });
    }
    if (!isValid(req.body.source.sourceName)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  sourcename ..." });
    }

    if (!isValidName(req.body.source.sourceName))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourcename...",
      });
    if (!isValid(req.body.source.address.sourceAddress)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  sourceAddress..." });
    }

    if (!isValidName(req.body.source.address.sourceAddress))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourceAddress...",
      });
    if (!isValid(req.body.source.address.sourceLocation)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  sourceLocation..." });
    }

    if (!isValidName(req.body.source.address.sourceLocation))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourceLocation...",
      });
    if (!isValid(req.body.source.address.sourceCity)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  sourceCity..." });
    }

    if (!isValidName(req.body.source.address.sourceCity))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourceCity...",
      });
    if (!isValid(req.body.source.address.sourceState)) {
      return res
        .status(400)
        .send({ status: false, message: "Please provide  sourceState..." });
    }

    if (!isValidName(req.body.source.address.sourceState))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourceState...",
      });

    if (!isValidPincode(req.body.source.address.sourcePostalCode))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourcePostalCode...",
      });
    if (!isValidLattitude(req.body.source.sourceLatitude+","+req.body.source.sourceLongitude))
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  sourceLatitude+sourceLongitude...",
      });
   
    if (req.body.status) {
      if (!isValidStatus(req.body.status)) {
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  driverName...",
        });
      }
    }

    if (!req.body.customer) {
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  customer...",
      });
    }
    if (!isValidObjectId(req.body.customer)) {
      return res.status(400).send({
        status: false,
        message: "Please Enter a valid  customer...",
      });
    }
    if (!isValid(req.body.destination.destinationName)) {
        return res
          .status(400)
          .send({ status: false, message: "Please provide  destinationName..." });
      }
  
      if (!isValidName(req.body.destination.destinationName))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationName...",
        });
      if (!isValid(req.body.destination.address.destinationAddress)) {
        return res
          .status(400)
          .send({ status: false, message: "Please provide  destinationAddress..." });
      }
  
      if (!isValidName(req.body.destination.address.destinationAddress))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationAddress...",
        });
      if (!isValid(req.body.destination.address.destinationLocation)) {
        return res
          .status(400)
          .send({ status: false, message: "Please provide  destinationLocation..." });
      }
  
      if (!isValidName(req.body.destination.address.destinationLocation))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationLocation...",
        });
      if (!isValid(req.body.destination.address.destinationCity)) {
        return res
          .status(400)
          .send({ status: false, message: "Please provide  destinationCity..." });
      }
  
      if (!isValidName(req.body.destination.address.destinationCity))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationCity...",
        });
      if (!isValid(req.body.destination.address.destinationState)) {
        return res
          .status(400)
          .send({ status: false, message: "Please provide  destinationState..." });
      }
  
      if (!isValidName(req.body.destination.address.destinationState))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationState...",
        });
  
      if (!isValidPincode(req.body.destination.address.destinationPostalCode))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationPostalCode...",
        });
  
      if (!isValidLattitude(req.body.destination.address.coordinates.destinationLatitude+","+req.body.destination.address.coordinates.destinationLongitude))
        return res.status(400).send({
          status: false,
          message: "Please Enter a valid  destinationLatitude+destinationLongitude...",
        });
    
        if (!req.body.vendor) {
            return res.status(400).send({
              status: false,
              message: "Please Enter a valid  vendor...",
            });
          }
          if (!isValidObjectId(req.body.vendor)) {
            return res.status(400).send({
              status: false,
              message: "Please Enter a valid  driverName...",
            });
          }
let bookingTime=new Date()
let pickupTime=new Date()

let data=req.body
data.bookingTime=bookingTime
data.pickupTime=pickupTime
data.bookingId=Math.floor(Math.random()*89999+100000)
let bookingdata = await booking.create(data)
return res
      .status(201)
      .send({ status: true, message: "Success", data: bookingdata });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error });
  }
};

exports.getbookingdetails=(async(req,res)=>{
  try {
    let details=await bookingModel.find().populate('customer');
    if(!details){
      return res.status(400).json({satus:false,msg:"No data found"})
    }
    return res.status(200).json({status:true,data:details})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ err: error.message });

  }
})