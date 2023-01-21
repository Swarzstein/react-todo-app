import React from 'react';
import TodosList from './TodosList';
import Header from './Header';

class TodoContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Set devlopment environment",
                    completed: true
                },
                {
                    id: 2,
                    title: "Develop website and add content",
                    completed: false
                },
                {
                    id: 3,
                    title: "Deploy to live server",
                    completed: false
                }
            ]
        };
    }

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.state.todos.map(
                todo => {
                    if (todo.id === id) { 
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo;
                }
            )
        }));
    }

    render() {
        return (
            <div>
                <Header />  
                <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} />
            </div>
        );
    }
}

export default TodoContainer;