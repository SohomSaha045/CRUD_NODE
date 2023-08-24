const User=require('../models/user');


async function handleGetAllUsers(req,res){
    const result = await User.find({});
    return res.json(result);
}
async function createNewUser(req,res){
    const body=req.body;
    if(!body || !body.email ||!body.gender || !body.job_title || !body.first_name || !body.last_name){
      return res.status(400).json({
        status:"Error bad Request"
      });
    }
    // console.log(body);
     const result=await User.create({
      firstName:body.first_name,
      lastName:body.last_name,
      gender:body.gender,
      jobTitle:body.job_title,
      email:body.email
     });
     console.log(result);
     return res.status(201).json({msg:'Success',id: result._id});
}
async function getUserById(req,res){
    const id=req.params.id;
    const user=await User.findById(id);
    if(!user) return res.status(404).json({
      status:"Not found"
    });
    return res.json(user);
}
async function patchUserById(req,res){
    const id=req.params.id;
      
    const user=await User.findByIdAndUpdate(id,{lastName: req.body.lastName});
    return res.json({"status":"Update Completed"});
}
async function deleteUserById(req,res){
    // const id=req.params.id;
      
    // const user=await User.findByIdAndUpdate(id,{lastName: req.body.lastName});
    return res.json({"status":"Delete Pending"});
}


module.exports={
    handleGetAllUsers,
    getUserById,
    patchUserById,
    deleteUserById,
    createNewUser
}