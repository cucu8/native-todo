import { uuid } from "../utils";
import Realm from 'realm';

export const TodosSchema = {
    name: 'Todos',
    properties: {
        _id: 'string',
        title: 'string',
        completed: 'bool'
    },
    primaryKey: '_id'
}

let realm = new Realm({
    schema: [
        TodosSchema
    ],
    schemaVersion: 1
});

export const Todos = realm.objects("Todos");

export const createTodo = (data) => {
    try {
        data._id = uuid();
        realm.write(() => {
            realm.create("Todos", data)
        });
        return data;
    } catch (e) {
        console.log(e);
        console.error(e);
    }
};

export const deleteTodo = (id) => {
    try {
        realm.write(() => {
            const deleteObject = Todos.find(e => e._id === id);
            realm.delete(deleteObject);
        });
    } catch (e) {
        console.error(e);
    }
};

export const updateTodo = (id, data) => {
    try {
        realm.write(() => {
            const todo = Todos.find(e => e._id === id);
            todo.completed = data.completed;
        });
    } catch (e) {
        console.error(e);
    }
};