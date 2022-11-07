

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("new item is added or not", ()=>{
        a={
            "id":4,
            "title": "T4",
            "description": "D4",
            "done": false
        }
        expect(todo_service.add_todo(a).todo.length).toEqual(4);
    });

    test("checking delete todo",()=>{
        x=todo_service.get_todos().todo.length;
        c=Math.floor(Math.random() * (x)) + 1;
        todo_service.delete_todo(c);
        expect(todo_service.get_todos().todo.find(x => x['id'] == c)).toBe(undefined);
    });

    test("checking update_todo",()=>{
        a={"id":1,"title": "T1","description": "new desc","done": true}
        todo_service.update_todo(a['id'],a);
        expect(todo_service.get_todos().todo.filter(x => x['id'] == a['id'])[0]).toEqual(a);
    });
    

    // Write all your test cases here that corresponds to software requirements


});
