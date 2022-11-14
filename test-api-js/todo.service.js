class todoservice{
    todo_data = {
        "todo":[{
            "id":1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":2,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id":3,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        this.todos=this.todo_data;
        return this.todos;
    }

    add_todo(todo){
        // Your code here
        this.todo_data['todo'].push(todo)
        // this.todo_data['todo']
        this.todos=this.todo_data;
        return this.todos;
    }
    

    delete_todo(id){
        // Your code here
        if(id>-1)
        {
            // this.todo_data['todo'].slice(id,1);
         this.todo_data['todo'] = this.todo_data['todo'].filter(x => x['id'] != id);
            this.todos=this.todo_data;
        }
        return this.todos;

    }
    
    update_todo(id, todo){
        // Your code here
          let todo_index = this.todo_data['todo'].findIndex((x => x['id'] == id));

            this.todo_data['todo'][todo_index] = todo;
            this.todos=this.todo_data;
        
        return this.todos; 
    }
}


module.exports= todoservice;