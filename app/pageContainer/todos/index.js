import React, { useState, useRef, useEffect } from "react";
import {
    Alert
} from "react-native";
import {
    Todos as getTodos,
    createTodo as dbCreateTodo,
    deleteTodo as dbDeleteTodo,
    updateTodo as dbUpdateTood
} from "../../db";

const Todos = (ChildrenMethod) => {
    const [todoText, setTodoText] = useState("");
    const [todoList, setTodoList] = useState([]);
    const inputRef = useRef();

    useEffect(() => {
        setTodoList(JSON.parse(JSON.stringify(getTodos)))
    }, [])

    const addTodo = () => {
        if (todoText === "") return alert("Please Write something Todo");
        const createdData = dbCreateTodo({
            title: todoText,
            completed: false,
        });
        setTodoList((_todoList) => [
            ..._todoList,
            createdData
        ]);
        setTodoText("");
        inputRef.current.blur();
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
                    onPress: () => {
                        dbDeleteTodo(id);
                        setTodoList(todoList.filter(todo => todo._id !== id))
                    },
                }
            ]
        );
    }

    const todoComplete = (id, data) => {
        const newData = todoList.map(todo => {
            if (todo._id === id) {
                todo = {
                    ...todo,
                    ...data
                };
            };
            return todo;
        });
        dbUpdateTood(id, data);
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
        inputRef={inputRef}
        addTodo={addTodo}
    />

};

export default Todos;