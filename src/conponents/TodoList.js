const TodoList = () => {
    const todos = [
        {id: 1, title: 'todo1', completed: false},
        {id: 2, title: 'todo2', completed: false},
        {id: 3, title: 'todo3', completed: true},
        {id: 4, title: 'todo4', completed: false},
        {id: 5, title: 'todo5', completed: false}
    ]
    return ( 
        <ul>
            {todos.map(item => (
                <li key={item.id}>
                    <input type='checkbox' checked={item.completed} />
                    item.title
                    <button>Delete</button>
                </li>
            ))}
        </ul>
     );
}
 
export default TodoList;