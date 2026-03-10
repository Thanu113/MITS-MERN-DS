const { createTodo, getTodo, updateTodo, deleteTodo } = require("../controllers/todoController");

const express=require('express');

const todoRouters=express.Router();
todoRouters.post('/create',createTodo);
todoRouters.get('/',getTodo);
todoRouters.put('/update/:id',updateTodo);
todoRouters.delete('/delete/:id',deleteTodo);
module.exports=todoRouters;