import React, { useContext, useState, useEffect } from 'react';
import { Table, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { TodosContext } from './TodosContext';
import useAPI from './useAPI';

const endpoint = "http://localhost:3001/todos/";

function ToDoList() {
    const { state, dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const buttonTitle = editMode ? "Edit" : "Add";

    const savedTodos = useAPI(endpoint);

    useEffect(() => {
        dispatch({ type: 'get', payload: savedTodos });
    }, [savedTodos, dispatch]);

    const handleSubmit = async event => {
        event.preventDefault();
        if (editMode) {
            await axios.patch(endpoint + editTodo.id, { text: todoText });
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            setEditMode(false);
            setEditTodo(null);
        } else {
            const newToDo = { id: uuidv4(), text: todoText };
            await axios.post(endpoint, newToDo);
            dispatch({ type: 'add', payload: newToDo });
        }
        setTodoText("");
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="todoText">
                    <Form.Control
                        type="text"
                        placeholder="Enter To Do"
                        onChange={event => setTodoText(event.target.value)}
                        value={todoText}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3">
                    {buttonTitle}
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.text}</td>
                            <td>
                                <Button
                                    variant="link"
                                    onClick={() => {
                                        setTodoText(todo.text);
                                        setEditMode(true);
                                        setEditTodo(todo);
                                    }}
                                >
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant="link"
                                    onClick={async () => {
                                        await axios.delete(endpoint + todo.id);
                                        dispatch({ type: 'delete', payload: todo });
                                    }}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ToDoList;