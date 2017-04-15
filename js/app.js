var app =
    new Vue({
        el: '#app',
        data: {
            todo: {
                item: null,
                hasError: false,
                isComplete: false,
                isVisible: true
            },
            todos: [],
        },
        methods: {
            addTodo() {
                if (this.todo.item) {
                    let {item, isComplete, isVisible} = this.todo;
                    this.todos.push({item, isComplete, isVisible});
                    this.todo.item = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index,1);
            },
            isComplete(index) {
                this.todos[index].isComplete ? this.todos[index].isComplete = false : this.todos[index].isComplete = true;
            },
            isVisible(filter) {
                this.todos.forEach(todo => {
                    switch (filter) {
                    case 'all':
                        todo.isVisible = true;
                        break;
                    case 'active':
                        !todo.isComplete ? todo.isVisible = true : todo.isVisible = false;
                        break;
                    case 'completed':
                        todo.isComplete ? todo.isVisible = true : todo.isVisible = false;
                    }
                })
            }
        },
        computed: {
            stillTodo: function(){
                let stillTodos = [];
                this.todos.forEach(todo => !todo.isComplete ? stillTodos.push(todo) : null);
                return stillTodos.length;
            }
        }
    })