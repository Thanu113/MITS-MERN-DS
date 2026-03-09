exports.getUsers=(req,res)=>{
    res.send("Get all Users..");
}
exports.getUserById=(req,res)=>{
    res.send("Get User By ID.");
}
exports.createUser=(req,res)=>{
    res.json({
        message:"User Created Successfully"
    })
}
exports.updateUser=(req,res)=>{
    res.json({
        message:"User updated Successfully"
    })
}
exports.deleteUser=(req,res)=>{
    res.json({
        message:"user deleted Successfully"
    })
}