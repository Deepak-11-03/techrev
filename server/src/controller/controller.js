const customerModel = require("../model/customerModel");
const addressModel = require("../model/addressModel");
const isValid = function (value) {
  if (typeof value === "undefined" || value === null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};

module.exports.createCustomer = async (req, res) => {
  try {
    let data = req.body;
    const {
      userName,
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        password,
        confirmPassword,
        address,
        landmark,
        city,
        state,
        country,
        zipcode,
    } = data;
    console.log(data)
    if (!isValid(firstName)) {
      return res.status(400).send({ msg: "firstName is required" });
    }
    if (!isValid(lastName)) {
      return res.status(400).send({ msg: "lastName is required" });
    }
    if (!isValid(userName)) {
      return res.status(400).send({ msg: "userName is required" });
    }
    if (!isValid(gender) || !['male' , 'female' , "Male", "Female"].includes(gender)) {
      return res.status(400).send({ msg: "gender is required" });
    }
    if (!isValid(dob)) {
      return res.status(400).send({ msg: "dob is required" });
    }
    if (!isValid(email)) {
      return res.status(400).send({ msg: "email is required" });
    }
    let existing_email = await customerModel.findOne({ email });
    if (existing_email) {
      return res.status(400).send({ msg: "email is already exist" });
    }
    if (!isValid(phone)) {
      return res.status(400).send({ msg: "phone is required" });
    }
    let existing_phone = await customerModel.findOne({phone})
    if(existing_phone){
        return res.status(400).send({ msg: "phone is already exist" });
    }

    if (!isValid(password)) {
      return res.status(400).send({ msg: "password is required" });
    }
    if (!isValid(confirmPassword)) {
      return res.status(400).send({ msg: "confirmPassword is required" });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "password and confirm password are not match",
        });
    }
    const created = await customerModel.create( {userName,
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        password,
        confirmPassword});
    await addressModel.create({customerId:created._id ,address,
      landmark,
      city,
      state,
      country,
      zipcode,})
    return res.status(201).send({status:true ,msg:"Data created"});
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports.getAllCustomers =async(req,res)=>{
    try {
        let data = await customerModel.find({isDeleted:false})
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}
module.exports.delete =async(req,res)=>{
   try {
    let id = req.params.id
     await customerModel.findOneAndUpdate({ _id: id }, { $set: { isDeleted: true} })
     await addressModel.findOneAndUpdate({ customerId: id }, { $set: { isDeleted: true} })

    return res.status(200).send({status:true,"msg":"deleted"})
   } catch (error) {
    return res.status(500).send({ error: error.message });
   }
}