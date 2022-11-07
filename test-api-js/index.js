var express =require('express') ;
var app = express();

app.use(express.json());
var todoservice =require('./todo.service.js');

let todo_service = new todoservice();

app.get('/todolist', function (req, res) {
  // console.log('API called with GET:' + req.url);
  res.json(todo_service.get_todos());
})

// Add more api calls here for each requirement

app.get('/addItem', function (req, res) {
  let a = todo_service.get_todos();
  let l = a['todo'].length;
  let e ={
    "title": 'T'+(l+1), "description": 'D'+(l+1),"done":false
  }
  // console.log('API called with GET:' + req.url);
  res.json(todo_service.add_todo(e));
})

app.get('/deleteItem', function (req, res) {
  // let a = todo_service.delete_todo();
  let e ={
    "title": 'T'+(l+1), "description": 'D'+(l+1),"done":false
  }
  // console.log('API called with GET:' + req.url);
  // res.json(todo_service.add_todo(e));
})

// app.listen(3000, function () {
//   // console.log(' app listening on port 3000!')
// })

module.exports = app;
