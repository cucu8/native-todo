import React, { useState } from "react";
import uuid from 'react-native-uuid';
import { Alert } from "react-native";

const Todos = (ChildrenMethod) => {
    const [todoText, setTodoText] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
        if (todoText === "") return alert("Please Write something Todo");

        setTodoList([
            ...todoList,
            {
                id: uuid.v4(),
                text: todoText,
                completed: false,

            }
        ]);
        setTodoText("");
    }

    const deleteTodo = (id) => {
        Alert.alert(
            "Are you sure Delete todo ?",
            "",
            [
                {
                    text: "Cancel",
                },
                {
                    text: "Ok",
                    onPress: () => setTodoList(todoList.filter(todo => todo.id !== id)),
                }
            ]
        );
    }

    const todoComplete = (id, data) => {

        const newData = todoList.map(todo => {
            if (todo.id === id) {
                todo = {
                    ...todo,
                    ...data
                };
            };
            return todo;
        });
        setTodoList(newData);
    }


    const deleteAllTodo = () => {
        if (todoList.length === 0) return alert("You have not todo added yet")
        Alert.alert(
            "Are you sure Delete all todo ?",
            "if you choose ok all todos will be deleted",
            [
                {
                    text: "Cancel",
                },
                {
                    text: "OK",
                    onPress: () => setTodoList([]),
                },
            ]
        );
    }

    return <ChildrenMethod
        deleteAllTodo={deleteAllTodo}
        todoComplete={todoComplete}
        setTodoList={setTodoList}
        setTodoText={setTodoText}
        deleteTodo={deleteTodo}
        todoList={todoList}
        todoText={todoText}
        addTodo={addTodo}
    />

};

export default Todos;