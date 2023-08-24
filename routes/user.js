const express = require('express')


const {handleGetAllUsers,getUserById, patchUserById, deleteUserById, createNewUser}=require('../controllers/user')
const router=express.Router();
router.route('/').get(handleGetAllUsers).post(createNewUser);

  /*router.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=data.find((user)=>user.id===Number(id));
    return res.json(user);
  })
  router.patch('/api/users/:id',(req,res)=>{
    // Update user
    return res.json({"status":"Update Pending"});
  })
  router.delete('/api/users/:id',(req,res)=>{
    // Update user
    return res.json({"status":"Delete Pending"});
  })*/
  
  router.route('/:id').get(getUserById).patch(patchUserById).delete(deleteUserById);
  


  /*router.route('/api/users/:id').get(async (req,res)=>{
    const id=req.params.id;
    const user=await User.findById(id);
    if(!user) return res.status(404).json({
      status:"Not found"
    });
    return res.json(user);
  }).patch(
    async (req,res)=>{
      const id=req.params.id;
      
      const user=await User.findByIdAndUpdate(id,{lastName: req.body.lastName});
      return res.json({"status":"Update Completed"});
    }
  ).delete((req,res)=>{
    return res.json({"status":"Delete Pending"});
  }
  )*/

  module.exports=router;